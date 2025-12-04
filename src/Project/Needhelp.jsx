import './Needhelp.css';
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { TbMessageChatbot } from "react-icons/tb";

const Needhelp = () => {
  const cardStyle = {
    borderRadius: "12px",
    padding: "25px",
    cursor: "pointer",
    textAlign: "center",
    transition: "0.3s",
    width: "100%",
  };

  const badgeStyle = {
    fontSize: "12px",
    padding: "7px 8px",
    borderRadius: "4px",
  };

  return (
    <div className="py-5" style={{ background: "#f9fafb" }}>
      <Container>
        <Row className="align-items-center needhelp-row">
          <Col md={4}>
            <h3 className="fw-bold">Need help? Let’s connect</h3>
            <p className="text-muted">
              If you have any queries, feel free to contact us
            </p>
          </Col>
          <Col md={8} className='needhelp-cards'>
            <Row className="g-4">
              <Col md={3}>
                <Card
                  style={{ ...cardStyle, border: "1px solid #ffdde5",fontSize:"13px" }}
                  className="shadow-sm position-relative"
                >
                  <Badge
                    style={{
                      ...badgeStyle,
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}
                    className='position-absolute badge-livechat'
                  >
                    ● 2 Mins Reply
                  </Badge>
                  <a href="#quick-chat" className='text-decoration-none text-dark'>
                    <TbMessageChatbot size={30} color="#ff4f70" />
                    <p className="mt-3 fw-semibold">Live Chat</p>
                  </a>
                </Card>
              </Col>
              <Col md={3}>
                <Card
                  style={{ ...cardStyle, border: "1px solid #bff3cc",fontSize:"13px" }}
                  className="shadow-sm position-relative"
                >
                  <Badge
                    style={{
                      ...badgeStyle,
                      backgroundColor:"#31c48d",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}
                    className='position-absolute badge-whatsapp'
                  >
                    ● 2 Mins Reply
                  </Badge>

                  <a href="https://wa.me/your-number" className='text-decoration-none text-dark'>
                    <FaWhatsapp size={28} color="#28d17c" />
                    <p className="mt-3 fw-semibold ">Chat on Whatsapp</p>
                  </a>
                </Card>
              </Col>

              {/* Email */}
              <Col md={3}>
                <Card
                  style={{ ...cardStyle, border: "1px solid #e5e7eb",fontSize:"14px" }}
                  className="shadow-sm"
                >
                  <a href="mailto:contact@amberstudent.com" className='text-decoration-none text-dark'>
                    <FaRegEnvelope size={28} color="#d1a530" />
                    <p className="mt-3 fw-semibold">Email Us</p>
                  </a>
                </Card>
              </Col>

              {/* Phone */}
              <Col md={3}>
                <Card
                  style={{ ...cardStyle, border: "1px solid #e5e7eb",fontSize:"15px" }}
                  className="shadow-sm"
                >
                  <a href="tel:+918035735724" className='text-decoration-none text-dark'>
                    <BsTelephone size={20} color="#2b78e4" />
                    <p className="mt-3 fw-semibold ">+91 8035735724</p>
                  </a>
                </Card>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Needhelp;
