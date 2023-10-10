import './filter.scss';

const Filter = (props) => {
    const onFilterChanged = (e, country) => {
        const isAlreadyActive = e.target.classList.contains('active');
        const onChanged = props.onFilterChanged;

        e.target.parentNode.childNodes.forEach(el => el.classList.remove('active'));
        
        if (isAlreadyActive)
        {
            onChanged('');
        }
        else {
            e.target.classList.add('active');
            onChanged(country);
        }
    }

    return (
        <div className='filter'>
            <label>Or filter</label>

            <ul>
                <li onClick={(e) => onFilterChanged(e, 'Brazil')}>Brazil</li>
                <li onClick={(e) => onFilterChanged(e, 'Kenya')}>Kenya</li>
                <li onClick={(e) => onFilterChanged(e, 'Columbia')}>Columbia</li>
            </ul>
        </div>
    );
};

export default Filter;