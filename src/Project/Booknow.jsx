import React,{useState} from "react";
import {
  Modal,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { FaFacebook, FaApple, FaEnvelope, FaChevronDown } from "react-icons/fa";

const Booknow = ({ show, handleClose, item }) => {
  if (!item) return null;
 const [mobile, setMobile] = useState("");
  const [open, setOpen] = useState(false);

  if (!item || !room) return null;

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
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton />

      <Modal.Body>
        <Row className="g-4">
          <Col md={5}>
            <Card className="h-100 shadow-sm">
              <Card.Img className=""
                src={item.images?.[0] || item.image}
                style={{width:"250px",padding:"20px 10px",borderRadius:"10px"}}
              />

              <Card.Body>
                <h6 className="fw-bold mb-1">{item.name}</h6>
                <p className="text-muted mb-3">{item.location}</p>

                <Row className="mb-2">
                  <Col xs={6}>
                    <small className="text-muted">Room Type</small>
                    <p className="fw-semibold mb-0">Twin Bed Studios</p>
                  </Col>
                  <Col xs={6}>
                    <small className="text-muted">Duration</small>
                    <p className="fw-semibold mb-0">31 weeks</p>
                  </Col>
                </Row>
<p className="fw-semibold mb-0">{room.duration}</p>
<p className="fw-semibold mb-0">{room.moveIn}</p>
<p className="fw-semibold mb-0">{room.moveOut}</p>
<h5 className="fw-bold">{room.price}</h5>

                <hr />

                <p className="fw-bold mb-0">Rent</p>
                <h5 className="fw-bold">£350 / week</h5>
              </Card.Body>
            </Card>
          </Col>

          <Col md={7}>
            <h4 className="fw-bold mb-3">Book Now</h4>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Your Full Name *</Form.Label>
                <Form.Control placeholder="Enter full name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Email Address *</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

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
                </Col>
                <Col xs={8}>
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
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Best Way To Reach You</Form.Label>
                <div className="d-flex gap-4">
                  <Form.Check type="checkbox" label="Whatsapp" />
                  <Form.Check type="checkbox" label="Email" />
                  <Form.Check type="checkbox" label="Call" />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={
                    <span>
                      I agree with all the{" "}
                      <a href="#" className="fw-semibold">
                        terms
                      </a>{" "}
                      and{" "}
                      <a href="#" className="fw-semibold">
                        privacy
                      </a>{" "}
                      of amberstudent.
                    </span>
                  }
                />
              </Form.Group>
              <Button
                className="w-100 py-2 fw-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #ed3a56, #ff5c75)",
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
