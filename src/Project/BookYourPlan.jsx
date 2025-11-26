import { Container } from "react-bootstrap";
import bookinghd1 from './../assets/bookinghd-1.svg';
import bookinghd2 from './../assets/bookinghd-2.svg';
import bookinghd3 from './../assets/bookinghd-3.svg';
import './BookYourPlan.css';
function BookYourPlan(){
    return(
        <div>
            <Container>
                <h4 className="fw-bold pt-5">Book your place in 3 easy steps</h4>
                <p className="text-secondary">Book places in major cities and universities across the globe</p>
                <div className="steps-row ms-4">
             <div class="step position-relative">
            <div class="step-num">1</div>
            <div class="step-box ">
                <img src={bookinghd1} class="icon"></img>
                <h3 style={{fontSize:"18px"}}>Discover and Finalise</h3>
                <p style={{fontSize:"14px"}}>Choose from a plethora of verified student home listings</p>
            </div>
        </div>
        <div class="arrow"></div>
        <div class="step position-relative">
            <div class="step-num">2</div>
            <div class="step-box">
                <img src={bookinghd2} className="icon"></img>
                <h3 style={{fontSize:"18px"}}>Get your paperwork done</h3>
                <p style={{fontSize:"14px"}}>Paperwork’s on us, no need to fuss.</p>
            </div>
        </div>

        <div class="arrow"></div>
        <div class="step position-relative">
            <div class="step-num">3</div>
            <div class="step-box">
                <img src={bookinghd3} class="icon"></img>
                <h3 style={{fontSize:"18px"}}>Accommodation Booked</h3>
                <p style={{fontSize:"14px"}}>Relax, pack your bags, and enjoy your new chapter!</p>
            </div>
        </div>
    </div>
            </Container>
        </div>
    )
}
export default BookYourPlan;