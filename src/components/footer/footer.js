import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../navigation/navigation';

import './footer.scss';
import beans from '../../img/BeansLogo.svg'

const Footer = (props) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Navigation currentPage={props.currentPage} 
                            onPageChange={props.onPageChange}
                            invertColor={props.invertColor}></Navigation>
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-2 d-flex justify-content-center' style={ { filter: 'invert(1.0)' } }>
                        <img className='beans' src={beans} alt="Beans logo" />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;