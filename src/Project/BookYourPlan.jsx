import { Container } from "react-bootstrap";
import bookinghd1 from './../assets/bookinghd-1.svg';
import bookinghd2 from './../assets/bookinghd-2.svg';
import bookinghd3 from './../assets/bookinghd-3.svg';
import Steparrowright from './../assets/step-arrow-right.svg';
import './BookYourPlan.css';
function BookYourPlan(){
    return(
        <div style={{height:"360px"}}>
            <div className="container">
                <h4 className="fw-bold pt-5 ms-1">Book your place in 3 easy steps</h4>
                <p className="text-secondary ms-1">Book places in major cities and universities across the globe</p>
                <div className="steps-row d-flex align-items-center overflow-x-hidden">
             <div className="step position-relative  ">
            <div className="step-num d-flex ms-4 justify-content-center align-items-center position-absolute">1</div>
            <div className="step-box ms-4 ">
                <img src={bookinghd1}  className="icon"></img>
                <h3 style={{fontSize:"18px"}}>Discover and Finalise</h3>
                <p style={{fontSize:"14px"}}>Choose from a plethora of verified student home listings</p>
            </div>
        </div>
            <img width="80" height="20" src={Steparrowright} className="me-3 arrow1"></img>
        <div className="step position-relative">
            <div className="step-num d-flex justify-content-center align-items-center position-absolute">2</div>
            <div className="step-box">
                <img src={bookinghd2} className="icon"></img>
                <h3 style={{fontSize:"18px"}}>Get your paperwork done</h3>
                <p style={{fontSize:"14px"}}>Paperwork’s on us, no need to fuss.</p>
            </div>
        </div>
            <img width="80" height="20" src={Steparrowright} className=" me-3 arrow1"></img>
        <div className="step position-relative">
            <div className="step-num d-flex justify-content-center align-items-center position-absolute">3</div>
            <div className="step-box">
                <img src={bookinghd3} className="icon"></img>
                <h3 style={{fontSize:"18px"}}>Accommodation Booked</h3>
                <p style={{fontSize:"14px"}}>Relax, pack your bags, and enjoy your new chapter!</p>
            </div>
        </div>
    </div>
            </div>
        </div>
    )
}
export default BookYourPlan;