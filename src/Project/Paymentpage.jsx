import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import "./PaymentPage.css";

function Paymentpage() {
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const [errors, setErrors] = useState({});

  const handlePay = () => {
    let newErrors = {};

    if (card.length < 16) newErrors.card = "Your card number is incomplete.";
    if (!expiry) newErrors.expiry = "Your card’s expiration date is incomplete.";
    if (!cvc) newErrors.cvc = "Your card’s security code is incomplete.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Payment Successful (UI Demo)");
    }
  };

  return (
    <Container fluid className="payment-page p-4">
      <Row>
        {/* LEFT – PAYMENT */}
        <Col md={8}>
          <Card className="p-4 mb-4">
            <h5 className="mb-3">Payment</h5>

            <p className="text-success fw-semibold mb-4">
              🔒 Secure, fast checkout with Link
            </p>

            <Form>
              {/* CARD NUMBER */}
              <Form.Group className="mb-3">
                <Form.Label>Card number</Form.Label>
                <Form.Control
                  className={errors.card ? "error-input" : ""}
                  placeholder="1234 1234 1234 1234"
                  value={card}
                  onChange={(e) => setCard(e.target.value.replace(/\D/g, ""))}
                />
                {errors.card && (
                  <small className="text-danger">{errors.card}</small>
                )}
              </Form.Group>

              <Row>
                {/* EXPIRY */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Expiration date</Form.Label>
                    <Form.Control
                      className={errors.expiry ? "error-input" : ""}
                      placeholder="MM / YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                    />
                    {errors.expiry && (
                      <small className="text-danger">{errors.expiry}</small>
                    )}
                  </Form.Group>
                </Col>

                {/* CVC */}
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Security code</Form.Label>
                    <Form.Control
                      className={errors.cvc ? "error-input" : ""}
                      placeholder="CVC"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                    {errors.cvc && (
                      <small className="text-danger">{errors.cvc}</small>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* COUNTRY */}
              <Form.Group className="mb-4">
                <Form.Label>Country</Form.Label>
                <Form.Select>
                  <option>India</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </Form.Select>
              </Form.Group>

              <p className="small text-muted">
                By continuing, you agree to our{" "}
                <span className="text-primary">terms and conditions</span>
              </p>

              <Button
                className="pay-btn w-100"
                size="lg"
                onClick={handlePay}
              >
                Pay £51.81 →
              </Button>
            </Form>
          </Card>
        </Col>

        {/* RIGHT – SUMMARY */}
        <Col md={4}>
          <Card className="mb-3">
            <Card.Img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" />
            <Card.Body>
              <h6>East Central House, London</h6>
              <p className="text-muted mb-2">London, England, GB</p>

              <hr />

              <p><b>Room Type</b><br />Large Standard Double Ensuite</p>

              <p>
                <b>Duration</b><br />
                51 weeks
              </p>

              <p>
                <b>Move-In</b><br />
                12 Sep, 2026
              </p>

              <p>
                <b>Move-Out</b><br />
                5 Sep, 2027
              </p>

              <hr />

              <h6>Price Summary</h6>

              <div className="d-flex justify-content-between">
                <span>Holding Fee</span>
                <span>£50</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Processing Fee</span>
                <span>£1.81</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>£51.81</span>
              </div>
            </Card.Body>
          </Card>

          <Card className="p-3">
            <Badge bg="success" className="mb-2">
              Safe & Secure Payment
            </Badge>
            <p className="mb-1">✔ Lowest Price Guaranteed</p>
            <p className="mb-0">✔ Cancellation Policy</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Paymentpage;
