import './Thebestpartner.css'
import bimm from '../assets/partner/bimm.avif';
import birmingham from '../assets/partner/birmingham.avif';
import into from '../assets/partner/into.avif';
import jamescook from '../assets/partner/jamescook.avif';
import law from '../assets/partner/law.avif';
import lc from '../assets/partner/lc.avif';
import medicine from '../assets/partner/medicine.avif';
import niagara from '../assets/partner/Niagara.avif';
import schiller from '../assets/partner/schiller.avif';
import torrens from '../assets/partner/torrens.avif';
import ue from '../assets/partner/ue.avif';
import uws from '../assets/partner/uws.avif';
import westminster from '../assets/partner/westminster.avif';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Thebestpartner(){
    const images =[
        bimm,birmingham,into,jamescook,law,lc,medicine,niagara,schiller,torrens,ue,uws,westminster,
    ]
    return(
                <div className='bestpartner mt-5'>
            <Container className="pt-5">
                <Row>
                    <Col xs={12} className="">
                        <h3 className='fw-bolder text-dark'>We have the best partners</h3>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12}>
                        <div className="scrol-wrapper">
                            <div className="scrol-content">
                                {[...images, ...images, ...images].map((src, index) => (
                                    <img key={index} src={src} className="scrol-img" alt={`logo-${index}`} />
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Thebestpartner;