import './Footer.css'
import amber from '../assets/bg1/amber-logo-light (1).svg'
import star from'../assets/stars-4.5.svg';
import white from '../assets/logo-white.svg';
import { Container, Row, Col } from "react-bootstrap";
import appstore from '../assets/app-store.svg';
import facebook from '../assets/Facebook.svg';
import footerpartners from '../assets/footerpartners.svg';
import footerpayment from '../assets/footerpayment.svg';
import instagram from '../assets/Instagram.svg';
import Linkdin from '../assets/Linkedin.svg';
import pinterest from '../assets/pinterest.svg';
import playstore from '../assets/playstore.svg';
import tiktok from '../assets/tiktok.svg';
import twitter from '../assets/Twitter.svg';
import visa from '../assets/visa.svg';
import youtube from '../assets/Youtube.svg';

function Footer(){
    return(
        <div>
                <div className='d-flex'>
        <Container>
                    <div>
                        <img src={amber} />
                                <Row className="gy-4">

          {/* LEFT SECTION */}
          <Col md={4}>
            <h3 className="fw-bold">amber</h3>
            <p className="text-muted">amber © 2025. All rights reserved.</p>

            <div>
                <div>
                <img src={white} alt='white'style={{width:"150px",height:"60px",
                filter: 'invert(100%) sepia(99%) saturate(367%) hue-rotate(100deg)',
                }}></img></div>
              <img src={star} alt="Trustpilot" style={{ width: "170px",marginLeft:"0px"}} />
              <p className="mt-2">
                <strong style={{fontSize:"13px"}}>TrustScore 4.7</strong> |{" "}
                <a href="#" className="fw-bold text-dark"style={{fontSize:"12px"}}>8,627 reviews</a>
              </p>
            </div>

            {/* App Images */}
            <div>
            <div className="d-flex gap-3 mt-4">
              <img src={playstore} alt="Play Store" style={{ width: "20px" }} />
              <img src={appstore} alt="App Store" style={{ width: "20px" }} />
            </div>
</div>
            {/* Payment Options */}
            <div className="mt-3 d-flex gap-3">
              <img src={visa} alt="visa" style={{ width: "45px" }} />
              {/* <img src={mastercard} alt="mastercard" style={{ width: "45px" }} /> */}
              {/* <img src={american} alt="amex" style={{ width: "55px" }} /> */}
            </div>
          </Col>

          {/* CENTER LINKS */}
          <Col md={5}>
            <Row>
              <Col xs={4}>
                <h6 className="fw-bold mb-3">Company</h6>
                <ul className="list-unstyled">
                  <li>About</li>
                  <li>How it works</li>
                  <li>Refer a Friend</li>
                  <li>Group Bookings <span className="badge bg-danger-light text-danger">New</span></li>
                  <li>List with us <span className="badge bg-danger-light text-danger">New</span></li>
                  <li>Partner with us <span className="badge bg-danger-light text-danger">New</span></li>
                  <li>Universities <span className="badge bg-danger-light text-danger">New</span></li>
                  <li>Careers <span className="badge bg-danger-light text-danger">We are hiring!</span></li>
                </ul>
              </Col>

              <Col xs={4}>
                <h6 className="fw-bold mb-3">Discover</h6>
                <ul className="list-unstyled">
                  <li>Blog</li>
                  <li>Podcast</li>
                  <li>Newsroom</li>
                  <li>Amber Plus</li>
                  <li>Media Mention</li>
                  <li>Ambassador</li>
                  <li>Scholarships <span className="badge bg-danger-light text-danger">Apply Now</span></li>
                  <li>Exams <span className="badge bg-danger-light text-danger">New</span></li>
                </ul>
              </Col>

              <Col xs={4}>
                <h6 className="fw-bold mb-3">Support</h6>
                <ul className="list-unstyled">
                  <li>Help Center</li>
                  <li>Contact</li>
                  <li>T&C</li>
                  <li>Privacy Policy</li>
                  <li>Sitemap</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* CONTACT US */}
          <Col md={3}>
            <h6 className="fw-bold mb-3">Contact us</h6>

            <div className="border p-2 rounded mb-2">
              📧 contact@amberstudent.com
            </div>

            <div className="border p-2 rounded mb-2 d-flex align-items-center gap-2">
              🟢 WhatsApp
            </div>

            <div className="border p-2 rounded mb-4 d-flex align-items-center gap-2">
              📞 +91 8035735724
            </div>

            <h6 className="fw-bold">Follow us on</h6>
            <div className="d-flex gap-3 mt-2">
              {/* <FaYoutube size={22} />
              <FaInstagram size={22} />
              <FaTiktok size={22} />
              <FaLinkedin size={22} />
              <BsTwitterX size={22} />
              <FaPinterest size={22} /> */}
            </div>
          </Col>

        </Row>
                    </div>
      </Container>
                </div>
            

        </div>
    )
}
export default Footer;