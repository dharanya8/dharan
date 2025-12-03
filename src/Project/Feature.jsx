import './Thebestpartner.css'
import cnbc from '../assets/partner/cnbc.avif';
import eco from '../assets/partner/eco.avif';
import fin from '../assets/partner/fin.avif';
import invezz from '../assets/partner/invezz.avif';
import outlook from '../assets/partner/outlook.avif';
import yourstory from '../assets/partner/yourstory.avif';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Feature(){
    const images =[
        cnbc,eco,fin,invezz,outlook,yourstory,
    ]
    return(
         <div className='bestpartner'>
            <Container className="pt-5">
                <Row>
                    <Col xs={12} className="">
                        <h3 className='fw-bolder text-dark'>Feature In</h3>
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
export default Feature;