import './item.scss';

const Item = (props) => {
    const { imgSrc, imgAlt, name, price, country } = props;

    const countryEl = country ? <div className='best_item_country'>{country}</div> : null;

    return (
        <div className='best_item'>
            <img src={imgSrc} alt={imgAlt}></img>
            <div className='best_item_name'>{name}</div>
            {countryEl}
            <div className='best_item_price'>{price}$</div>
        </div>
    )
};

export default Item;