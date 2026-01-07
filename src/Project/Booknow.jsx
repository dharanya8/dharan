import React, { useState } from "react";
import { Modal, Row, Col, Card, Form, Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { PiCalendarCheckLight } from "react-icons/pi";
import { BsShieldCheck } from "react-icons/bs";
import Image from "react-bootstrap/Image";
import './Booknow.css'
import Insight2 from "./../assets/insight2.svg";
import insight3 from "./../assets/insight3.svg";
import Review from "../assets/review.svg";
import { useNavigate } from "react-router-dom";
const Booknow = ({ show,onclose,handleClose, item, room }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [open, setOpen] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);

  const [selectedCode, setSelectedCode] = useState({
    code: "+91",
    country: "India",
  });

  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const handleNameChange = (e) => {
    const value = e.target.value;

    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
      setNameError("");
    } else {
      setNameError("Name should contain only letters");
    }
  };
  const validateEmail = (value) => {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!name) {
      setNameError("Name is required");
      valid = false;
    }
    if (!email || emailError) {
      setEmailError("Valid email is required");
      valid = false;
    }
    if (!mobile || mobile.length < 10) {
      setMobileError("Valid mobile number is required");
      valid = false;
    }
    if (!valid) return;
    navigate("/success");
  };
  const countries = [
    { code: "+44", country: "United Kingdom" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+1", country: "USA" },
    { code: "+1", country: "Canada" },
  ];
  const infoList = [
    {
      title: "Instant Booking",
      icon: <PiCalendarCheckLight className="fs-5" />,
    },
    {
      title: "Lowest Price Guaranteed",
      icon: <Image src={Insight2} width={22} />,
    },
    {
      title: "Verified Properties",
      icon: <BsShieldCheck size={20} />,
    },
    {
      title: "24x7 Assistance",
      icon: <Image src={insight3} width={22} />,
    },
    {
      title: "8.8k+ Reviews",
      icon: <Image src={Review} width={26} />,
    },
  ];
  if (!item || !room) return null;
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton />
      <Modal.Body>
        <Row className="g-3">
          {/* LEFT */}
          <Col lg={5} md={12}>
            <Card className="shadow-sm mb-2">
              <Card.Img
                src={item.images?.[0] || item.image}
                className="p-3 rounded"
              />
              <Card.Body>
                <h6 className="fw-bold " style={{ fontSize: "13px" }}>{item.name}</h6>
                <p className="text-muted mb-2" style={{ fontSize: "12px" }}>{item.location}</p>
                <p className="mb-2 fw-semibold" style={{ fontSize: "13px" }}>{room.duration}</p>
                <small style={{ fontSize: "12px " }}>{room.moveIn} → {room.moveOut}</small>
                <h5 className="fw-bold mt-2" style={{ fontSize: "14px" }}>{room.price}</h5>
              </Card.Body>
            </Card>
            <Card className="shadow-sm  p-2 ">
              {infoList.map((info, i) => (
                <div key={i} className="d-flex gap-1 mb-2">
                  {info.icon}
                  <div>
                    <p className="mb-0 mt-1" style={{ fontSize: "13px" }}>{info.title}</p>
                  </div>
                </div>
              ))}
            </Card>
          </Col>
          {/* RIGHT */}
          <Col lg={7} md={12} className="shadow-sm" style={{ borderRadius: "10px", border: "1px solid #ccc" }}>
            <h4 className="fw-bold mb-3 mt-2 text-center">Book Now</h4>
            <Form>
              {/* NAME */}
<div className={`floating-label mb-3 ${nameError ? "error" : ""}`}>
                <input
                  value={name}
                  onChange={handleNameChange}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                  required
                />
                <label className={isNameFocused || name ? "float" : ""}>
                  Full Name *
                </label>
              </div>
              {/* EMAIL */}
<div className={`floating-label mb-3 ${emailError ? "error" : ""}`}>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }} onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  required
                />
                <label className={isEmailFocused || email ? "float" : ""}>
                  Email *
                </label>
              </div>
              {/* MOBILE */}
              <Row className="mb-3">
                <Col xs={4}>
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
                            setSelectedCode({ code: "", id: "", country: "" });
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
                </Col>

                <Col xs={8}>
<div className={`floating-label ${mobileError ? "error" : ""}`}>
                    <input
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      onFocus={() => setIsMobileFocused(true)}
                      onBlur={() => setIsMobileFocused(false)}
                      required
                    />
                    <label className={isMobileFocused || mobile ? "float" : ""}>
                      Mobile Number *
                    </label>
                  </div>
                </Col>
              </Row>

              <Form.Check
                className="mb-3 now" style={{ marginTop: "65%" }}
                label={
                  <small>
                    I agree to the <b>terms</b> & <b>privacy policy</b>
                  </small>
                }
              />

              <Button
              onClick={handleSubmit}
                className="w-100 py-2 fw-semibold"
                style={{
                  background: "linear-gradient(90deg,#ed3a56,#ff5c75)",
                  border: "none",
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Booknow;
