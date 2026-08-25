import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, ProgressBar, Badge } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import './Success.css'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PiCalendarCheckLight } from "react-icons/pi";
import Insight2 from './../assets/insight2.svg';
import insight3 from './../assets/insight3.svg';
import { BsShieldCheck } from "react-icons/bs";
import { IoIosArrowUp,IoIosArrowDown  } from "react-icons/io";
import Review from '../assets/review.svg';
import Image from 'react-bootstrap/Image';
import { Modal } from "react-bootstrap";
function Success() {
  const navigate = useNavigate();
const location = useLocation();
const {
  userName,
  image,
  propertyName,
  location: place,
  roomType,
  duration,
  moveIn,
  moveOut,
  price
} = location.state || {};
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
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");

  const [codeOpen, setCodeOpen] = useState(true);
  const [countryOpen, setCountryOpen] = useState(false);
  const [nationalityOpen, setNationalityOpen] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMobileFocused, setIsMobileFocused] = useState(false);
  const [isCodeFocused, setIsCodeFocused] = useState(false);
  const [isDateFocused, setIsDateFocused] = useState(false);
  const [isNationalityFocused, setIsNationalityFocused] = useState(false);
  const [isCountryFocused, setIsCountryFocused] = useState(false);
  const [isZipFocused, setIsZipFocused] = useState(false);
  const [isCityFocused, setIsCityFocused] = useState(false);
  const [isCourseFocused, setIsCourseFocused] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);
  const [selectedCode, setSelectedCode] = useState({
    code: "+91",
    country: "India",
  });
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [dateError, setDateError] = useState("");
  const [zipError, setZipError] = useState("");
  const [cityError, setCityError] = useState("");
  const [courseError, setCourseError] = useState("");
  const [addressError, setAddressError] = useState("");
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
      setNameError("");
    } else {
      setNameError("Name should contain only letters");
    }
  };
  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (!/^[a-zA-Z\s]+$/.test(value)) return "Name should contain only letters";
    return "";
  };

  const getEmailError = (value) => {
    if (!value.trim()) return "Email is required";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ""
      : "Please enter a valid email address";
  };

  const validateEmail = (value) => {
    setEmail(value);
    setEmailError(getEmailError(value));
  };

  const getDateError = (value) => {
    if (!value.trim()) return "Date of birth is required";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime()) || parsed > new Date()) {
      return "Please enter a valid date of birth";
    }
    return "";
  };

  const getZipError = (value) => {
    if (!value.trim()) return "Zipcode is required";
    return /^[a-zA-Z0-9\s-]{3,10}$/.test(value.trim())
      ? ""
      : "Please enter a valid zipcode";
  };

  const getCityError = (value) => {
    if (!value.trim()) return "City is required";
    return /^[a-zA-Z\s'-]+$/.test(value.trim())
      ? ""
      : "City should contain only letters";
  };

  const getCourseError = (value) =>
    value.trim() ? "" : "Course name is required";

  const validateDate = (value) => setDateError(getDateError(value));
  const validateZip = (value) => setZipError(getZipError(value));
  const validateCity = (value) => setCityError(getCityError(value));
  const validateCourse = (value) => setCourseError(getCourseError(value));

  const handleApplicationSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: validateName(name),
      email: getEmailError(email),
      mobile: mobile.trim() ? "" : "Mobile number is required",
      date: getDateError(date),
      address: address.trim() ? "" : "Address is required",
      city: getCityError(city),
      zip: getZipError(zip),
      course: getCourseError(course),
    };

    setNameError(errors.name);
    setEmailError(errors.email);
    setMobileError(errors.mobile);
    setDateError(errors.date);
    setAddressError(errors.address);
    setCityError(errors.city);
    setZipError(errors.zip);
    setCourseError(errors.course);

    if (Object.values(errors).some(Boolean)) return;
    setShowBookedPopup(true);
    setTimeout(() => {
      setShowBookedPopup(false);
      navigate("/");
    }, 3000);
  };

  const [selectedCountry, setSelectedCountry] = useState({
    shortname: "+91",
    country: "India",
  });
  const countryid = [
    { shortname: "UK", country: "United Kingdom" },
    { shortname: "IN", country: "India" },
    { shortname: "AU", country: "Australia" },
    { shortname: "USA", country: "USA" },
    { shortname: "CA", country: "Canada" },
    { shortname: "NI", country: "Nigeria" },
    { shortname: "UAE", country: "UAE" },
    { shortname: "IN", country: "Indonesia" },
    { shortname: "AN", country: "Andorra" },
    { shortname: "AF", country: "Afghanistan" },
    { shortname: "SA", country: "South Africa" },
    { shortname: "BR", country: "Brazil" },
    { shortname: "IT", country: "Italy" },
    { shortname: "SP", country: "Spain" },
    { shortname: "ME", country: "Mexico" },
  ];
  const [gender, setGender] = useState("Female");
  const [university, setUniversity] = useState("");

  const universities = [
    "City Law School-London, England, United Kingdom",
    "City University of London-London, England, United Kingdom",
    "Cass Business School-London, England, United Kingdom",
  ];

const infoList = [
  {
    title: "Instant Booking",
    desc: "Instant booking allows you to quickly book the property by paying the amount.",
    icon: <PiCalendarCheckLight className="fs-4" />,
  },
  {
    title: "Lowest Price Guaranteed",
    desc: "We guarantee to match the price of your accommodation if you find an identical offer on another..",
    icon: <Image src={Insight2} style={{ width: 25 }} />,
  },
  {
    title: "Verified Properties",
    desc: "We guarantee that what you see on our website is exactly what you'll get.",
    icon: <BsShieldCheck style={{ fontSize: 23 }} fill="gray" />,
  },
  {
    title: "24x7 Personal Assistance",
    desc: "For any doubts or queries, a quick call is all it takes - we're here to assist you promptly..",
    icon: <Image src={insight3} style={{ width: 25 }} />,
  },
  {
    title:"8.8k+ Reviews",
    desc:"We've earned an excellent rating from over 8,700+ students for our outstanding services.",
    icon:<Image src={Review} 
    style={{width:30,height:30,}}/>
  }
];
const [openIndex, setOpenIndex] = useState(null);

const toggleDropdown = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
const [showBookedPopup, setShowBookedPopup] = useState(false);

  return (
    <>
    <Container fluid className="p-4 bg-light" style={{ fontFamily: "inherit" }}>
      {/* Header */}
      <Card className="mb-4 p-3">
        <h4>
          Thanks <b>{userName}</b>, let’s save your spot.
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
                        setCodeOpen((prev) => !prev);
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
                    {codeOpen && (
                      <div className="drop-list mt-2 position-absolute" style={{ width: "190px", maxHeight: "250px", borderRadius: "8px", overflowY: "auto", border: "1px solid #ccc", background: "#fff", zIndex: "1000" }} >
                        {countries.map((item, index) => (
                          <div
                            key={index}
                            className="drop-item2"
                            onClick={() => {
                              setSelectedCode(item);
                              setCodeOpen(false);
                              setIsCodeFocused(false);
                            }}
                          >
                            <h6>{item.code}</h6>
                            <p>{item.country}</p>
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
                  </div>
                </Col>
              </Row>
            </Form>
          </Card>
          {/* Accommodation */}

          <Card className="p-4 shadow-sm  mt-4">
            <h5 className="fw-bold mb-4">Application Details</h5>

            <Form onSubmit={handleApplicationSubmit}>
              {/* DOB + Nationality */}
              <Row className="mb-3">
                <Col md={6}>
                  <div className={`floating-label mb-3 ${dateError ? "error" : ""}`}>
                    <input
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        validateDate(e.target.value);
                      }} onFocus={() => setIsDateFocused(true)}
                      onBlur={() => setIsDateFocused(false)}
                      required
                    />
                    <label className={isDateFocused || date ? "float" : ""}>
                      Your Date Of Birth
                    </label></div></Col>

                <Col>
                  <div className="floating-label small-input position-relative">
                    <div
                      className={`shortname-input ${isCountryFocused ? "focused" : ""}`}
                      onClick={() => {
                        setNationalityOpen((prev) => !prev);
                        setIsNationalityFocused(true);
                      }}
                      onBlur={() => setIsNationalityFocused(false)}
                    >
                      <input
                        type="text"
                        id="shortname"
                        value={selectedCountry.shortname}
                        readOnly
                        required
                      />
                      <label
                        htmlFor="shortname"
                        className={
                          isCountryFocused || selectedCountry.shortname ? "float" : ""
                        }
                      >
                        Nationality
                      </label>
                      {!selectedCountry.shortname && (
                        <FaChevronDown className={`arrow2 ${open ? "open" : ""}`} />
                      )}

                      {selectedCountry.shortname && (
                        <MdClose
                          size={18}
                          className="remove-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCountry({ shortname: "", id: "", country: "" });
                          }}
                        />
                      )}
                    </div>

                    {nationalityOpen && (
                      <div className="drop-list2">
                        {countryid.map((item, index) => (
                          <div
                            key={index}
                            className="drop-item2"
                            onClick={() => {
                              setSelectedCountry(item);
                              setNationalityOpen(false);
                              setIsNationalityFocused(true);
                            }}
                          >
                            <h6>{item.shortname}</h6>
                            <p>{item.country}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Col>
              </Row>

              {/* Gender */}
              <Row className="mb-3">
                <Col>
                  <Form.Label>Gender</Form.Label>
                  <div className="d-flex gap-4  rounded p-3 " style={{ border: "1px solid #ccc", width: "35%" }}>
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
              <Row><Col md={12}>
                <div className={`floating-label mb-3 ${addressError ? "error" : ""}`}>
                  <input
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setAddressError(e.target.value);
                    }} onFocus={() => setIsAddressFocused(true)}
                    onBlur={() => setIsAddressFocused(false)}
                    required
                  />
                  <label className={isAddressFocused || address ? "float" : ""}>
                    Your Full Address
                  </label>
                </div>
              </Col>
              </Row>
              {/* Country + Pincode */}
              <Row className="mb-3">
                <Col md={6}>
                  <div className="floating-label small-input position-relative">
                    <div
                      className={`shortname-input ${isCountryFocused ? "focused" : ""}`}
                      onClick={() => {
                        setCountryOpen((prev) => !prev);
                        setIsCountryFocused(true);
                      }}
                      onBlur={() => setIsCountryFocused(false)}
                    >
                      <input
                        type="text"
                        id="shortname"
                        value={selectedCountry.shortname}
                        readOnly
                        required
                      />
                      <label
                        htmlFor="shortname"
                        className={
                          isCountryFocused || selectedCountry.shortname ? "float" : ""
                        }
                      >
                        Country
                      </label>
                      {!selectedCountry.shortname && (
                        <FaChevronDown className={`arrow2 ${open ? "open" : ""}`} />
                      )}

                      {selectedCountry.shortname && (
                        <MdClose
                          size={18}
                          className="remove-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCountry({ shortname: "", id: "", country: "" });
                          }}
                        />
                      )}
                    </div>

                    {countryOpen && (
                      <div className="drop-list2">
                        {countryid.map((item, index) => (
                          <div
                            key={index}
                            className="drop-item2"
                            onClick={() => {
                              setSelectedCountry(item);
                              setCountryOpen(true);
                              setIsCountryFocused(true);
                            }}
                          >
                            <h6>{item.shortname}</h6>
                            <p>{item.country}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </Col>
                <Col md={6}>
                  <div className={`floating-label mb-3 ${zipError ? "error" : ""}`}>
                    <input
                      value={zip}
                      onChange={(e) => {
                        setZip(e.target.value);
                        validateZip(e.target.value);
                      }} onFocus={() => setIsZipFocused(true)}
                      onBlur={() => setIsZipFocused(false)}
                      required
                    />
                    <label className={isZipFocused || zip ? "float" : ""}>
                      Zipcode/Pincode
                    </label>
                  </div>
                </Col>
              </Row>
              {/* Address */}
              <Row className="mb-3">
                <Col>
                  <div className={`floating-label mb-3 ${cityError ? "error" : ""}`}>
                    <input
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                        validateCity(e.target.value);
                      }} onFocus={() => setIsCityFocused(true)}
                      onBlur={() => setIsCityFocused(false)}
                      required
                    />
                    <label className={isCityFocused || city ? "float" : ""}>
                      City
                    </label>
                  </div>
                </Col>


                <Col md={6}>
                  <Form.Label>Select University Name</Form.Label>
                  <Form.Select style={{ fontSize: "14px" }}
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

              {/* City + University */}
              <Row className="mb-3">
                <Col md={6}>
                  <div className={`floating-label mb-3 ${courseError ? "error" : ""}`}>
                    <input
                      value={course}
                      onChange={(e) => {
                        setCourse(e.target.value);
                        validateCourse(e.target.value);
                      }} onFocus={() => setIsCourseFocused(true)}
                      onBlur={() => setIsCourseFocused(false)}
                      required
                    />
                    <label className={isCourseFocused || course ? "float" : ""}>
                      Course Name
                    </label>
                  </div>
                </Col>
              </Row>
              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="px-5"
                style={{
                  background: "linear-gradient(90deg,#ed3a56,#ff5c75)",
                  border: "none", fontSize: "14px"
                }}
              >
                Submit
              </Button>
            </Form>
          </Card>

        </Col>

        {/* RIGHT SIDE – PROPERTY CARD */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={image}     />

            <Card.Body>
              <Badge bg="success" className="mb-2">
                Book with Confidence
              </Badge>

              <h6 className="mt-2">{propertyName}</h6>
              <p className="text-muted">{place}</p>

              <hr />

              <p>
                <b>Room Type</b><br />
                {roomType}
              </p>

              <Row>
                <Col>
                  <small className="text-muted">Duration</small>
                  <p>{duration}</p>
                </Col>
                <Col>
                  <small className="text-muted">Available From</small>
                  <p>{moveIn}</p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <small className="text-muted">Move-Out</small>
                  <p>{moveOut}</p>
                </Col>
                <Col>
                  <small className="text-muted">Rent</small>
                  <p><b>{price}</b></p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
           <Card className="shadow-sm  p-3 mt-3 "style={{border:"1px solid #ccc"}}>
          
                            {infoList.map((item, index) => (
                            <div key={index} className="mb-2">
                    <div
                      className="d-flex justify-content-between align-items-center cursor-pointer"
                      onClick={() => toggleDropdown(index)}
                    >
                  <div className="d-flex align-items-center mt-1">
                    <div className="Droplist">
                    <div className="">{item.icon}</div></div>
                    <p className="ms-2 mb-0" style={{ fontSize: "15px" }}>
                      {item.title}
                    </p>
                  </div>
                  <span>
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                      {openIndex === index && (
                        <p className="text-muted mt-2 ms-5" style={{ fontSize: "14px" }}>
                        {item.desc}
                         </p>
                          )}
                          </div>
                           ))}
                          </Card>
          
        </Col>
      </Row>
    </Container>
          <Modal show={showBookedPopup} centered backdrop="static">
        <Modal.Body className="text-center p-4">
          <BsCheckCircleFill size={50} className="text-success mb-3" />
          <h5 className="fw-bold">This room is booked...</h5>
          <p className="text-muted">Redirecting to home page…</p>
        </Modal.Body>
      </Modal>
  </>
  );
}

export default Success;
