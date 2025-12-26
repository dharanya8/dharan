import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FaFacebook, FaApple, FaEnvelope, FaChevronDown } from "react-icons/fa";
import "./LoginModal.css";
// import Viewcard from "./Viewcard";
import { useNavigate } from "react-router-dom";

function LoginModal({ show, onClose }) {
const [step, setStep] = useState("login");
const [otp, setOtp] = useState("");
const [error, setError] = useState("");
const [attempts, setAttempts] = useState(0);
const navigate = useNavigate();
const handleContinue = () => {
  if (!mobile || !selectedCode.code) return;

  setStep("otp"); 
};

 const handleVerifyOtp = () => {
  // user any 6 digit number enter panna podhum
  if (/^\d{6}$/.test(otp)) {
    setError("");
    onClose();
    const redirect = localStorage.getItem("redirectAfterLogin");
navigate(redirect || "/");
 
    // navigate("/viewcard");
  } else {
    setError("Please enter 6 digit OTP");
  }
};
  const [mobile, setMobile] = useState("");
  const [open, setOpen] = useState(false);

  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);

  const [selectedCode, setSelectedCode] = useState({
    code: "+91",
    country: "India",
  });
  const countries = [
    { code: "+44",country: "United Kingdom" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
  { code: "+1", country: "USA" },
    { code: "+1", country: "Canada" },
    { code: "+234", country: "Nigeria" },
    { code: "+971",country: "UAE" },
    { code: "+62",country: "Indonesia" },
    { code: "+376",country: "Andorra" },
    { code: "+93", country: "Afghanistan" },
    { code: "+27", country: "South Africa" },
    { code: "+55", country: "Brazil" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+52", country: "Mexico" },
  ];

  return (
    <Modal show={show} onHide={onClose} centered style={{fontFamily:"inherit"}}>
      <Modal.Body className="p-4 Model position-relative">
        {/* Close Button */}
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
        {step === "otp" && (
  <>
    <h5 className="text-center fw-bold mb-3">Enter OTP</h5>

    <input
      type="text"
      maxLength="6"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      className="form-control text-center"
      placeholder="Enter any 6 digit number"
    />

    {error && (
      <p className="text-danger text-center mt-2">{error}</p>
    )}

    <Button
      className="w-100 py-2 mt-3 custom-btn1"
      onClick={handleVerifyOtp}
    >
      Verify OTP
    </Button>
  </>
)}
        <h5 className="mb-4 text-center fw-bold">Login to Amber</h5>
        {/* Code + Mobile Input */}
        <div className="input-row">
          {/* Code Input */}
          <div className="floating-label small-input position-relative">
            <div
              className={`code-input ${isCodeFocused ? "focused" : ""}`}
              onClick={() => {
                setOpen((prev) => !prev);
                setIsCodeFocused(true);
              }}
              onBlur={() => setIsCodeFocused(false)}
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
                className={
                  isCodeFocused || selectedCode.code ? "float" : ""
                }
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
                    setSelectedCode({ code: "",id:"", country: "" });
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
                    <h6 className="drop-h6">{item.code}</h6><p className="drop-p">{item.country}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Input */}
          <div className="floating-label flex-grow-1">
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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

        {/* Continue Button */}
        {step === "login" && (
  <>
    {/* Existing login UI */}

    <Button
      className="w-100 py-2 mt-3 custom-btn1"
      disabled={!mobile || !selectedCode.code}
      onClick={handleContinue}
    >
      Continue
    </Button>
  </>
)}

        <div className="text-center my-3 text-secondary">or log in using</div>

        {/* Social Login */}
        <div className="d-flex flex-column gap-2">
          <Button
            variant="outline-secondary"
            className="d-flex align-items-center justify-content-center gap-2 continue"
          >
            <FaEnvelope /> Continue with Email
          </Button>

          <Button
            variant="outline-primary"
            className="d-flex align-items-center justify-content-center gap-2"
            onClick={() =>
              (window.location.href = "https://www.facebook.com/login")
            }
          >
            <FaFacebook /> Continue with Facebook
          </Button>

          <Button
            variant="outline-dark"
            className="d-flex align-items-center justify-content-center gap-2"
            onClick={() =>
              (window.location.href = "https://appleid.apple.com/sign-in")
            }
          >
            <FaApple /> Continue with Apple
          </Button>
        </div>

        <p className="small text-center mt-3 text-muted">
          By signing in, you agree to our{" "}
          <a href="#">Privacy Policy</a> and{" "}
          <a href="#">Terms & Conditions</a>.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
