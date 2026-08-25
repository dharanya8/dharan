import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FaEnvelope, FaChevronDown, FaApple } from "react-icons/fa";
import "./LoginModal.css";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import facebook from "../assets/facebooklog.svg";
import {
  OTP_MAX_ATTEMPTS,
  OTP_TTL_MS,
  generateOtp,
  isValidMobile,
  normalizeMobile,
  safeRedirectPath,
  startSession,
} from "./utils/auth";
import { readJson, removeItem } from "./utils/storage";

function LoginModal({ show, onClose }) {
  const [step, setStep] = useState("login");
  const [otp, setOtp] = useState("");
  const [temporaryOtp, setTemporaryOtp] = useState("");
  const [otpExpiresAt, setOtpExpiresAt] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(OTP_MAX_ATTEMPTS);
  const [error, setError] = useState("");
  const [mobile, setMobile] = useState("");
  const [open, setOpen] = useState(false);

  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);

  const navigate = useNavigate();

  const [selectedCode, setSelectedCode] = useState({
    code: "+91",
    country: "India",
  });

  const countries = [
    { code: "+44", country: "United Kingdom" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+1", country: "USA" },
    { code: "+1", country: "Canada" },
    { code: "+234", country: "Nigeria" },
    { code: "+971", country: "UAE" },
    { code: "+62", country: "Indonesia" },
    { code: "+376", country: "Andorra" },
    { code: "+93", country: "Afghanistan" },
    { code: "+27", country: "South Africa" },
    { code: "+55", country: "Brazil" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+52", country: "Mexico" },
  ];

  const handleContinue = () => {
    if (!selectedCode.code || !isValidMobile(mobile)) {
      setError("Please enter a valid mobile number");
      return;
    }

    setTemporaryOtp(generateOtp());
    setOtpExpiresAt(Date.now() + OTP_TTL_MS);
    setAttemptsLeft(OTP_MAX_ATTEMPTS);
    setOtp("");
    setError("");
    setStep("otp");
  };

  const resetOtpState = () => {
    setOtp("");
    setTemporaryOtp("");
    setOtpExpiresAt(0);
    setAttemptsLeft(OTP_MAX_ATTEMPTS);
  };

  const handleVerifyOtp = () => {
    if (!temporaryOtp || Date.now() > otpExpiresAt) {
      resetOtpState();
      setStep("login");
      setError("This OTP has expired. Please request a new one");
      return;
    }

    if (otp !== temporaryOtp) {
      const remaining = attemptsLeft - 1;
      setAttemptsLeft(remaining);
      setOtp("");

      if (remaining <= 0) {
        resetOtpState();
        setStep("login");
        setError("Too many incorrect attempts. Please request a new OTP");
        return;
      }

      setError(`Invalid OTP. ${remaining} attempt(s) left`);
      return;
    }

    startSession();
    resetOtpState();
    setError("");
    onClose();

    const redirect = safeRedirectPath(readJson("redirectAfterLogin"));
    removeItem("redirectAfterLogin");
    navigate(redirect);
  };

  return (
    <Modal show={show} onHide={onClose} centered style={{ fontFamily: "inherit" }}>
      <Modal.Body className="Model position-relative" style={{ padding: "30px" }}>
        <IoClose
          size={26}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            cursor: "pointer",
            color: "#555",
          }}
          onClick={onClose}
        />

        {step === "login" && (
          <>
            <h5 className="mb-4 text-center fw-bold">Login to Amber</h5>

            <div className="input-row">
              <div className="floating-label small-input position-relative">
                <div
                  className={`code-input ${isCodeFocused ? "focused" : ""}`}
                  onClick={() => {
                    setOpen((prev) => !prev);
                    setIsCodeFocused(true);
                  }}
                >
                  <input
                    type="text"
                    id="code"
                    value={selectedCode.code}
                    readOnly
                    required
                  />

                  <label
                    htmlFor="code"
                    className={isCodeFocused || selectedCode.code ? "float" : ""}
                  >
                    Code <span className="text-danger">*</span>
                  </label>

                  {!selectedCode.code && (
                    <FaChevronDown className={`arrow2 ${open ? "open" : ""}`} />
                  )}

                  {selectedCode.code && (
                    <MdClose
                      size={18}
                      className="remove-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCode({ code: "", country: "" });
                      }}
                    />
                  )}
                </div>

                {open && (
                  <div className="drop-list2">
                    {countries.map((item, index) => (
                      <div
                        key={index}
                        className="drop-item2 mt-2 ms-2"
                        onClick={() => {
                          setSelectedCode(item);
                          setOpen(false);
                          setIsCodeFocused(false);
                        }}
                      >
                        <h6 className="drop-h6">{item.code}</h6>
                        <p className="drop-p">{item.country}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="floating-label flex-grow-1">
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  maxLength={15}
                  onChange={(e) => setMobile(normalizeMobile(e.target.value))}
                  onFocus={() => setIsMobileFocused(true)}
                  onBlur={() => setIsMobileFocused(false)}
                  required
                />

                <label
                  htmlFor="mobile"
                  className={isMobileFocused || mobile ? "float" : ""}
                >
                  Mobile Number <span className="text-danger">*</span>
                </label>
              </div>
            </div>

            <Button
              className="w-100 py-2 mt-3 custom-btn1"
              disabled={!isValidMobile(mobile) || !selectedCode.code}
              onClick={handleContinue}
            >
              Continue
            </Button>

            {error && <p className="text-danger text-center mt-2">{error}</p>}

            <div className="text-center my-3 text-secondary">or log in using</div>

            <div className="d-flex flex-column gap-2">
              <Button
                variant="outline-dark"
                className="d-flex align-items-center gap-2 model-button"
                style={{ border: "2px solid #ccc" }}
              >
                <FaEnvelope />
                <div className="model-text" style={{ marginLeft: "86px" }}>
                  Continue with Email
                </div>
              </Button>

              <Button
                variant="outline-dark"
                className="d-flex model-button align-items-center gap-2"
                style={{ border: "2px solid #ccc" }}
                onClick={() =>
                  (window.location.href = "https://www.facebook.com/login")
                }
              >
                <Image src={facebook} style={{ width: "6%" }} />
                <div className="model-text" style={{ marginLeft: "80px" }}>
                  Continue with Facebook
                </div>
              </Button>

              <Button
                variant="outline-dark"
                className="d-flex model-button align-items-center gap-2"
                style={{ border: "2px solid #ccc" }}
                onClick={() =>
                  (window.location.href = "https://appleid.apple.com/sign-in")
                }
              >
                <FaApple />
                <div className="model-text" style={{ marginLeft: "86px" }}>
                  Continue with Apple
                </div>
              </Button>
            </div>

            <p className="small text-center mt-3 text-muted">
              By signing in, you agree to our <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Terms & Conditions</a>.
            </p>
          </>
        )}

        {step === "otp" && (
          <>
            <h5 className="text-center fw-bold mb-3">Enter OTP</h5>

            <input
              type="text"
              inputMode="numeric"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              className="form-control text-center"
              placeholder="Enter 6 digit OTP"
            />

            {import.meta.env.DEV ? (
              <p className="text-center mt-2">
                Development OTP: <strong>{temporaryOtp}</strong>
              </p>
            ) : (
              <p className="text-center mt-2 text-muted small">
                Enter the 6 digit code sent to {selectedCode.code} {mobile}
              </p>
            )}

            {error && <p className="text-danger text-center mt-2">{error}</p>}

            <Button
              className="w-100 py-2 mt-3 custom-btn1"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </Button>

            <p
              className="text-center mt-3"
              style={{ cursor: "pointer", color: "#0d6efd" }}
              onClick={() => {
                setStep("login");
                resetOtpState();
                setError("");
              }}
            >
              Change mobile number
            </p>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;