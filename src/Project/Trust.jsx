import { Container } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import In from './../assets/Flags/in_flag.svg';
import "./Trust.css";

function Trust() {
  const scrollRef = useRef(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const data = [
    {
      text: "The service given by amber was extremely good. I'm really satisfied with the service.",
      name: "Ritesh Kumar",
      college: "University Of Chester",
      flag: In,
    },
    {
      text: "Excellent phone, Whatsapp support from the agent from Amberstudent during the booking process and filling in the details.",
      name: "Ananya",
      college: "University Of Manchester",
      flag: In,
    },
    {
      text: "My experience regarding booking an accommodation with Amber was excellent.",
      name: "Trishi Jain",
      college: "University Of Queensland",
      flag: In,
    },
    {
      text: "I would like to recommend any student who has a budget and wants to find a great deal!",
      name: "Prapti Shetty",
      college: "Cardiff University",
      flag: In,
    },
    {
      text: "The experience with regard to the booking process is easy, simple and superb!",
      name: "Simran Gupta",
      college: "Kings College London",
      flag: In,
    }
  ];
const readMoreIndexes = [1, 2, 4]; 
const [open, setOpen] = useState({});
const toggle = (i) => { setOpen((prev) => ({ ...prev, [i]: !prev[i] })); };
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
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
    <div className="trust">
      <div className="millions position-relative">
        <Container>
          <h4 className="pt-5 fw-bold">Trust of 1 Million+ students</h4>
            <div className="fade-left"></div>
          {/* Left Arrow */}
          {showLeftArrow && (
            <button className="arrow-btn arrow-left d-flex " onClick={scrollLeft}>
              <IoIosArrowBack size={20} />
            </button>
          )}
          <div className="fade-right"></div>
          {/* Right Arrow */}
          {showRightArrow && (
            <button className="arrow-btn arrow-right" onClick={scrollRight}>
              <IoIosArrowForward size={20} />
            </button>
          )}
          <div className="scroll-wrapper position-relative overflow-hidden">
            <div className="scroll-card overflow-x-auto d-flex" ref={scrollRef}>
              {data.map((item, index) => (
                <div key={index} className="trust-card position-relative">
                  <p style={{fontSize:"14px"}}> {readMoreIndexes.includes(index)
                   ? (
                open[index]
                ? item.text 
                : item.text.slice(0, 55) + "..." 
                  )
                 : item.text
                  }
                   {readMoreIndexes.includes(index) && (
                <button
                 className="read-btn"
                 onClick={() => toggle(index)}
                 >
    {open[index] ? "Read Less" : "Read More"}
  </button>
)}
                  </p>
                  <div className="d-flex align-items-center mt-5">
                    <img src={item.flag} width="30" className="me-2" alt="" />
                    <div>
                      <h6 className="mb-0" style={{fontSize:"14px"}}>{item.name}</h6>
                      <small>{item.college}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
}

export default Trust;
