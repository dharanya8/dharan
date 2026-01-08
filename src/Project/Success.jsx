import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, ProgressBar, Badge } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

function Success() {
    const countries = [
        { code: "+44", country: "United Kingdom" },
        { code: "+91", country: "India" },
        { code: "+61", country: "Australia" },
        { code: "+1", country: "USA" },
        { code: "+1", country: "Canada" },
    ];
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [date, setDate] = useState("");
    const [nationality, setNationality] = useState("");
    const [country, setCountry] = useState("");
    const [zip, setZip] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [course, setCourse] = useState("");

    const [open, setOpen] = useState(false);
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isCodeFocused, setIsCodeFocused] = useState(false);
    const [isMobileFocused, setIsMobileFocused] = useState(false);
    const [selectedCode, setSelectedCode] = useState({
        code: "+91",
        country: "India",
    });
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
        handleClose();
        navigate("/Success");
    };
    const [gender, setGender] = useState("Female");
    const [university, setUniversity] = useState("");

    const universities = [
        "City Law School-London, England, United Kingdom",
        "City University of London-London, England, United Kingdom",
        "Cass Business School-London, England, United Kingdom",
    ];


    return (
        <Container fluid className="p-4 bg-light" style={{ fontFamily: "inherit" }}>
            {/* Header */}
            <Card className="mb-4 p-3">
                <h4>
                    Thanks <b>Dharanya</b>, let’s save your spot.
                </h4>
                <p className="text-muted mb-3">
                    Fasten up the booking by filling out the details to reserve this property.
                </p>

                {/* Steps */}
                {/* <Row className="align-items-center">
          <Col md={4}>
            <BsCheckCircleFill className="text-success me-2" />
            <b>Step 1</b> – Personal Details
          </Col>
          <Col md={4}>
            <span className="text-muted">Step 2 – Payment</span>
          </Col>
          <Col md={4}>
            <span className="text-muted">Step 3 – Application</span>
          </Col>
        </Row>

        <ProgressBar now={33} className="mt-3" /> */}
            </Card>

            <Row>
                {/* LEFT SIDE – FORM */}
            <Col md={8}>
            <Card className="p-4 mb-4">
             <h5 className="mb-3">Personal Details</h5>

            <Form>
           <Row className="mb-3">
           <Col md={6}>
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
            </label></div>
            </Col>

            <Col md={2}>
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

                                <Col md={4}>
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
                                    </div></Col>
                            </Row>

                            <Row className="mb-4">
                                <Col md={6}>
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
                                    </div>                  </Col>
                            </Row>

                            <Button size="lg"
                             style={{
                                    background: "linear-gradient(90deg,#ed3a56,#ff5c75)",
                                    border: "none",fontSize:"14px"
                                }}>
                                Continue
                            </Button>
                        </Form>
                    </Card>
                    {/* Accommodation */}

                    <Card className="p-4 shadow-sm  mt-4">
                        <h5 className="fw-bold mb-4">Application Details</h5>

                        <Form onSubmit={handleSubmit}>
                            {/* DOB + Nationality */}
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label>Your Date of Birth</Form.Label>
                                    <Form.Control type="date" />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Nationality</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>

                            {/* Gender */}
                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>Gender</Form.Label>
                                    <div className="d-flex gap-4  rounded p-3 "style={{border:"1px solid #ccc",width:"35%"}}>
                                        <Form.Check
                                            type="radio"
                                            label="Male"
                                            name="gender"
                                            checked={gender === "Male"}
                                            onChange={() => setGender("Male")}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Female"
                                            name="gender"
                                            checked={gender === "Female"}
                                            onChange={() => setGender("Female")}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Other"
                                            name="gender"
                                            checked={gender === "Other"}
                                            onChange={() => setGender("Other")}
                                        />
                                    </div>
                                </Col>
                            </Row>

                            {/* Country + Pincode */}
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label>Your Country of Residence</Form.Label>
                                    <Form.Control placeholder="Country" />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Zipcode / Pincode</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>

                            {/* Address */}
                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>Your Full Address</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>

                            {/* City + University */}
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="City" />
                                </Col>

                                <Col md={6}>
                                    <Form.Label>Select University Name</Form.Label>
                                    <Form.Select style={{fontSize:"14px"}}
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                    >
                                        <option>Select university</option>
                                        {universities.map((u, i) => (
                                            <option key={i} value={u}>
                                                {u}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Row>

                            {/* Course */}
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Label>Course Name</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>

                            {/* Submit */}
                            <Button
                                type="submit"
                                size="lg"
                                className="px-5"
                                style={{
                                    background: "linear-gradient(90deg,#ed3a56,#ff5c75)",
                                    border: "none",fontSize:"14px"
                                }}
                            >
                                Continue
                            </Button>
                        </Form>
                    </Card>

                </Col>

                {/* RIGHT SIDE – PROPERTY CARD */}
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img
                            variant="top"
                            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                        />

                        <Card.Body>
                            <Badge bg="success" className="mb-2">
                                Book with Confidence
                            </Badge>

                            <h6 className="mt-2">East Central House, London</h6>
                            <p className="text-muted">London, England, GB</p>

                            <hr />

                            <p>
                                <b>Room Type</b><br />
                                Large Standard Double Ensuite
                            </p>

                            <Row>
                                <Col>
                                    <small className="text-muted">Duration</small>
                                    <p>35 weeks</p>
                                </Col>
                                <Col>
                                    <small className="text-muted">Available From</small>
                                    <p>3 Jan, 2026</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <small className="text-muted">Move-Out</small>
                                    <p>4 Sep, 2026</p>
                                </Col>
                                <Col>
                                    <small className="text-muted">Rent</small>
                                    <p><b>From £303/week</b></p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Success;
