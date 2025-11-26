import Image from 'react-bootstrap/Image';
import insight from './../assets/insight.svg';
import Insight2 from './../assets/insight2.svg';
import insight3 from './../assets/insight3.svg';
import insight4 from './../assets//insight4.svg';
import Container from 'react-bootstrap/Container';

function Accommodation() {
  return (
    <div>
      <Container>
        <div className='mt-5'>
          <div>
            <h4 className='fw-bold text-dark'style={{fontSize:"24px"}}>Book your Perfect Accommodation</h4>
            <p className='text-secondary'>Take the hassle out of securing your student home for the best years of your life</p>
          </div>
          <div className="row justify-content-center">
            {/* Box 1 */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <div className='d-flex flex-column align-items-center'>
                <div className='d-flex flex-column'>
                <Image src={insight} style={{ width: "50px", height: "60px" }} />
                <h3 className='mt-2 ms-2'style={{fontSize:"16px"}}>Instant & Easy Bookings</h3>
                <p className="px-2 text-secondary"style={{fontSize:"14px"}}>Time is money. Save both when you book with us..</p>
              </div>
              </div>
            </div>
            {/* Box 2 */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <div className='d-flex flex-column align-items-center'>
                 <div className='d-flex flex-column' >
                <Image src={Insight2} style={{ width: "50px", height: "60px" }} />
                <h3 className='mt-2 ms-2'style={{fontSize:"16px"}}>Lowest Price Guarantee</h3>
                <p className="px-2 text-secondary"style={{fontSize:"14px"}}>Find a lower price and we'll match it. No questions asked..</p>
              </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <div className='d-flex flex-column align-items-center '>
                 <div className='d-flex flex-column'>
                <Image src={insight3} style={{ width: "50px", height: "60px" }} />
                <h3 className=' mt-2 ms-2'style={{fontSize:"16px"}}>24x7 Assistance</h3>
                <p className="px-2 text-secondary"style={{fontSize:"14px"}}>If you have a doubt or a query, we’re always a call away..
</p>
              </div>
              </div>
            </div>
            {/* Box 4 */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <div className='d-flex flex-column align-items-center'>
                <div className='d-flex flex-column'>
                <Image src={insight4} style={{ width: "50px", height: "60px" }} />
                <h3 className='mt-2 ms-2'style={{fontSize:"16px"}}>100% Verified Listings</h3>
                <p className="px-2 text-secondary"style={{fontSize:"14px",}}>We promise to deliver what you see on the website..</p>
              </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Accommodation;
