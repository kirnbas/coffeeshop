import { Col, Container, Row } from 'react-bootstrap';

import './item-details.scss';
import beans from '../../img/BeansLogo.svg';

const ItemDetails = ({item}) => {
    const {imgSrc, imgAlt, name, price, country, description} = item;

    let countryElement;
    if (country) {
        countryElement = (
            <Row className='mt-3'>
                <Col>
                    <div><span className='fw-bold'>Country: </span> {country}</div>
                </Col>
            </Row>
        );
    }

    return (
        <div className='item_details'>
            <Container>
                <Row>
                    <Col className='col-4 offset-2 d-flex justify-content-center col_img'>
                        <img src={imgSrc} alt={imgAlt}></img>
                    </Col>
                    <Col className='col-4'>
                        <Row>
                            <Col className='d-flex justify-content-center'><h2>{name}</h2></Col>
                        </Row>
                        <Row>
                            <Col className='mt-2 d-flex justify-content-center'>
                                <img className='beans' src={beans} alt="Beans logo" />
                            </Col>
                        </Row>        
                        {countryElement}                
                        <Row className='mt-2'>
                            <Col>
                                <div><span className='fw-bold'>Description: </span> {description}</div>
                            </Col>
                        </Row>
                        <Row className='mt-2'>
                            <Col>
                                <div><span className='fw-bold'>Price: </span> <span className='item_details_price'>{price}$</span></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default ItemDetails;