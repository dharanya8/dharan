import { Container } from "react-bootstrap";
import Offercard1 from './../assets/OfferCard01.avif';
import Offercard2 from './../assets/OfferCard02.avif';
import Offercard3 from './../assets/OfferCard03.avif';
import Offercard4 from './../assets/OfferCard04.avif';
import { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./AmberReferrel.css";
import { useNavigate } from "react-router-dom";
function AmberReferrel() {
const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };
  const handleScroll = () => {
    const container = scrollRef.current;
    const SL = container.scrollLeft;
    const maxSL = container.scrollWidth - container.clientWidth;
    setShowLeftArrow(SL > 0);
    setShowRightArrow(SL < maxSL - 10);
  };
  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Referrel position-relative">
      <Container>
        <h4 className="fw-bold pt-5">Amber Referral Program And Offers</h4>
        <p className="subtitle1 text-secondary">
          Several promotions, deals and special offers crafted just for you.
        </p>
        {/* Left Arrow */}
        {showLeftArrow && (
          <button className="arrow-btn1 arrow-left1 " onClick={scrollLeft}>
            <IoIosArrowBack size={20} />
          </button>
        )}
        {/* Right Arrow */}
        {showRightArrow && (
          <button className="arrow-btn1 arrow-right1  " onClick={scrollRight}>
            <IoIosArrowForward size={20} />
          </button>
        )}
        <div className="scroll-wrapper1 position-relative overflow-hidden">
          <div className="scroll-card1 d-flex overflow-auto flex-md-nowrap  gap-3 ps-2" ref={scrollRef}>
            {/* CARD 1 */}
            <div className="offer-card overflow-hidden"onClick={() => navigate("/ReferNow")}>
              <img src={Offercard1} className="offer-full-img" />
              <div className="offer-overlay ">
                <h5 className="fw-bold"style={{fontSize:"18px"}}>Refer a friend, and you both get £50</h5>
                <p style={{fontSize:"15px"}}>Turn connections into rewards.<br/>Get credited after successful booking.</p>
                <button onClick={() => navigate("/ReferNow")}
                className="offer-btn text-light">Refer Now</button>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="offer-card overflow-hidden" onClick={() => navigate("/ApplyNow")}>
              <img src={Offercard2}  className="offer-full-img" />
              <div className="offer-overlay">
                <h5 className="fw-bold"style={{fontSize:"18px"}}>Amberscholar 2025 Edition is Here!</h5>
                <p style={{fontSize:"15px"}}>Win upto $12,000 & study in the UK,<br/>USA, Canada, or Ireland.</p>
                <button onClick={() => navigate("/ApplyNow")}
                className="offer-btn text-light">Apply Now</button>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="offer-card overflow-hidden" onClick={() => navigate("/ClaimNow")}>
              <img src={Offercard3}className="offer-full-img" />
              <div className="offer-overlay">
                <h5 className="fw-bold"style={{fontSize:"18px"}}>Save up to £300 with amber+</h5>
                <p className=""style={{fontSize:"15px"}}>Get exclusive discounts from 150+ trusted 
<br/>partners at this one-stop student platform</p>
                <button onClick={() => navigate("/ClaimNow")}
                className="offer-btn text-light">Claim Now</button>
              </div>
            </div>
            {/* CARD 4 */}
            <div className="offer-card overflow-hidden"onClick={() => navigate("/AvailNow")}>
              <img src={Offercard4} className="offer-full-img" />
              <div className="offer-overlay">
                <h5 className="fw-bold"style={{fontSize:"18px"}}>Get additional £20 cashback on your
 booking!</h5>
                <p style={{fontSize:"15px"}}>Book your student accommodation via the amber 
<br/>app to avail this offer!</p>
                <button onClick={() => navigate("/AvailNow")}
                className="offer-btn  text-light">Avail Now</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AmberReferrel;
