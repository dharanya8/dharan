import './Footer.css';
import amber from '../assets/bg1/amber-logo-light (1).svg';
import star from '../assets/stars-4.5.svg';
import white from '../assets/logo-white.svg';
import { Container, Row, Col } from "react-bootstrap";
import appstore from '../assets/app-store.svg';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';
import Linkdin from '../assets/Linkedin.svg';
import pinterest from '../assets/pinterest.svg';
import playstore from '../assets/playstore.svg';
import tiktok from '../assets/tiktok.svg';
import twitter from '../assets/Twitter.svg';
import visa from '../assets/visa.svg';
import youtube from '../assets/Youtube.svg';
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <div className='Footer' style={{ backgroundColor: "#fff", padding: "20px 40px" }}>
      <Container >
        <img src={amber} alt="logo" />

        <Row className="gy-4 mt-3">

          {/* LEFT SECTION */}
          <Col md={6} lg={4}>
            <h3 className="fw-bold">amber</h3>
            <p className="text-muted">amber © 2025. All rights reserved.</p>

            <div>
              <img
                src={white}
                alt="white_logo"
                style={{
                  width: "150px",
                  height: "60px",
                  filter: "invert(100%) sepia(99%) saturate(367%) hue-rotate(100deg)"
                }}
              />
              <div>
              <img
                src={star}
                alt="trust"
                style={{ width: "170px", marginTop: "10px" }}
              /></div>
              <p className="mt-2">
                <strong style={{ fontSize: "13px" }}>TrustScore 4.7</strong> |{" "}
                <a href="#" className="fw-bold text-dark" style={{ fontSize: "12px" }}>
                  8,627 reviews
                </a>
              </p>
            </div>

            {/* Get App + Payment */}
            <div
              className="d-flex align-items-center getapp mt-3 p-2"
              style={{
                width: "90%",
                backgroundColor: "#f9fafb",
                borderRadius: "8px"
              }}
            >
              <div>
                <div className="fw-bold text-secondary">Get the app</div>
                <div className="d-flex gap-2 pt-2">
                  <img src={playstore} alt="Play Store" style={{ width: "20px" }} />
                  <img src={appstore} alt="App Store" style={{ width: "20px" }} />
                </div>
              </div>

              <div
                className="ms-3"
                style={{ width: "2px", height: "50px", backgroundColor: "#ddd" }}
              ></div>

              <div className="ms-3">
                <div className="fw-bold text-secondary">Payment Options</div>
                <img src={visa} alt="visa" style={{ width: "130px", marginTop: "5px" }} />
              </div>
            </div>
          </Col>

          {/* CENTER LINKS */}
          <Col md={5}>
            <Row>
              <Col xs={4}>
                <h6 className="fw-bold mb-3">Company</h6>
                <div className="footer-link">About</div>
                <div className="footer-link mt-2">How it works</div>
                <div className="footer-link mt-2">Refer a Friend</div>
                <div className="footer-link mt-2">Group Bookings</div>
              </Col>

              <Col xs={4}>
                <h6 className="fw-bold mb-3">Discover</h6>
                <div className="footer-link">Blog</div>
                <div className="footer-link mt-2">Podcast</div>
                <div className="footer-link mt-2">Newsroom</div>
                <div className="footer-link mt-2">Amber Plus</div>
              </Col>

              <Col xs={4}>
                <h6 className="fw-bold mb-3">Support</h6>
                <div className="footer-link">Help Center</div>
                <div className="footer-link mt-2">Contact</div>
                <div className="footer-link mt-2">T&C</div>
                <div className="footer-link mt-2">Privacy Policy</div>
              </Col>
            </Row>
          </Col>

          {/* CONTACT SECTION */}
          <Col md={3}>
            <h6 className="fw-bold mb-3">Contact us</h6>

            <div className="border1  p-2 rounded  mb-2 ">
              <a href="mailto:contact@amberstudent.com" className="d-flex text-decoration-none text-dark">
                <FaRegEnvelope size={18} color="#f3123c" />
                <span className="ms-2" style={{ fontSize: "14px" }}>
                  contact@amberstudent.com
                </span>
              </a>
            </div>

            <div className="border1  p-2 rounded mb-2">
              <a href="https://wa.me/your-number" className="d-flex text-decoration-none text-dark">
                <FaWhatsapp size={20} color="#28d17c" />
                <span className="ms-2" style={{ fontSize: "14px" }}>
                  Whatsapp
                </span>
              </a>
            </div>

            <div className="border1  p-2 rounded mb-4">
              <a href="tel:+918035735724" className="d-flex text-decoration-none text-dark">
                <BsTelephone size={15} color="#f3123c" />
                <span className="ms-2" style={{ fontSize: "14px" }}>
                  +91 8035735724
                </span>
              </a>
            </div>

            <h6 className="fw-bold">Follow us on</h6>

            <div className="d-flex gap-2  mt-2 ">
              <a href="https://www.instagram.com/amberstudent/">
                <img src={instagram} style={{ width: "22px" }} className='transition '/>
              </a>
              <a href="https://www.youtube.com/@amberstudent">
                <img src={youtube} style={{ width: "22px" }} className='transition' />
              </a>
              <a href="https://www.tiktok.com/@amberstudent">
                <img src={tiktok} style={{ width: "22px" }} className='transition' />
              </a>
              <a href="https://www.linkedin.com/company/amberstudent/">
                <img src={Linkdin} style={{ width: "22px" }} className='transition'/>
              </a>
              <a href="https://www.facebook.com/amberstudenthousing">
                <img src={facebook} style={{ width: "22px" }} className='transition'/>
              </a>
              <a href="https://twitter.com/amberstudent">
                <img src={twitter} style={{ width: "22px" }} className='transition'/>
              </a>
              <a href="https://www.pinterest.com/amberstudent/">
                <img src={pinterest} style={{ width: "22px" }} className='transition'/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
