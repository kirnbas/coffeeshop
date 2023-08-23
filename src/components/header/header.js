import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './header.scss';
import beans from '../../img/BeansLogo.svg'

import Navigation from '../navigation/navigation';
import { Fragment } from 'react';

const MainHeader = (props) => {
    const { currentPage } = props;

    let elements;
    let classHeader = 'additional_header';
    if (currentPage === 'home') {
        elements = (      
        <Fragment>      
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h1>Everything You Love About Coffee</h1>                        
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center mt-2'>
                    <img src={beans} alt="Beans logo"></img>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center mt-5'>
                    <h2>We makes every day full of energy and taste</h2>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center mt-4'>
                    <h2>Want to try our beans?</h2>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center mt-4'>
                    <a href="#more" className='btn btn-outline-light px-5 btn_more'>More</a>
                </Col>
            </Row>
        </Fragment>
        );
        classHeader = 'main_header';
    } else {
        let additionalHeader = currentPage === 'our' ? 'Our Coffee' : 'For your pleasure';

        elements = (
            <Fragment>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <h1>{additionalHeader}</h1>                        
                    </Col>
                </Row>
            </Fragment>
        )
    }

    return (
        <header className={classHeader}>
            <Container className='text-white'>
                <Row>
                    <Col>
                        <Navigation currentPage={props.currentPage} 
                                    onPageChange={props.onPageChange}
                                    invertColor={props.invertColor}></Navigation>
                    </Col>
                </Row>
                {elements}
            </Container>
        </header>
    );
};

export default MainHeader;