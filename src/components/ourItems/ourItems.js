import { Col, Container, Row } from 'react-bootstrap';
import Item from '../item/item';
import './ourItems.scss';

const OurItems = (props) => {
    const { coffees, onItemClicked } = props;

    const elements = coffees.map(x => {
            return (
                <Col key={x.id} onClick={() => onItemClicked(false, x.id)} className='item_col'>
                    <Item
                        key={x.id}
                        imgSrc={x.imgSrc}
                        imgAlt={x.imgAlt}
                        name={x.name}
                        price={x.price}
                        country={x.country}>                        
                    </Item>
                </Col>
            )
        });

    return (
        <section className='our_items'>
            <Container>
                <Row className='our_items_row'>
                    {elements}
                </Row>
            </Container>
        </section>
    );
};

export default OurItems;