import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './about.scss';
import beans from '../../img/BeansLogo.svg';
import aboutUs from '../../img/AboutUs.png';
import forYourPleasure from '../../img/ForYourPleasure.png';

const MainAbout = (props) => {
    let { currentPage, header, description, img, imgAlt } = props;

    switch (currentPage) {
        case 'home':
            header = 'About Us';
            description = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. 
                Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
                As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. 
                Children me laughing we prospect answered followed. At it went is song that held help face.                             
                <br><br>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. 
                Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. 
                Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.`
            break;
        case 'our':
            header = 'About our beans';
            description = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                <br><br>Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
                <br>As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`
            img = aboutUs;
            imgAlt = 'About Us';
            break;
        case 'foryou':
            header = 'About our goods';
            description = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. 
                <br><br>Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
                As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`
            img = forYourPleasure;
            imgAlt = 'For your pleasure';
            break;
        default:
            console.log('Wrong current page: ', currentPage);
    }

    let imgCol;
    let col2Class = 'col';
    if (img) {
        imgCol = (
            <Col className='col-4 offset-2 d-flex justify-content-center col_img'>
                <img src={img} alt={imgAlt}></img>
            </Col>
        );
        col2Class = 'col-4';
    }

    return (
        <section className='main_about'>
            <Container>
                <Row>
                    {imgCol}
                    <Col className={col2Class}>
                        <Row>
                            <Col className='d-flex justify-content-center'>
                                <h2>{header}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='mt-2 d-flex justify-content-center'>
                                <img className='beans' src={beans} alt="Beans logo" />
                            </Col>
                        </Row>
                        <Row>
                            <Col  className='mt-4 d-flex justify-content-center'>
                                <p className='main_text' dangerouslySetInnerHTML={{__html: description}}>
                                </p>
                            </Col>
                        </Row>    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MainAbout;