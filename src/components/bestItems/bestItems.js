import { Col, Container, Row } from 'react-bootstrap';

import './bestItems.scss';


import Item from '../item/item';

const MainBest = (props) => {
    const { bestCoffees, onItemClicked } = props;

    const elements = bestCoffees.map(x => {
        return (
            <Col key={x.id} onClick={() => onItemClicked(true, x.id)} className='best_item_col'>
                <Item 
                        key={x.id}
                        imgSrc={x.imgSrc}
                        imgAlt={x.imgAlt}
                        name={x.name}
                        price={x.price}>                
                </Item>
            </Col>
        );
    })

    return (
        <section className='best'>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <h2>Our best</h2>
                    </Col>
                </Row>
                <Row className='best_item_row'>
                    {elements}
                </Row>
            </Container>
        </section>
    );
};

export default MainBest;