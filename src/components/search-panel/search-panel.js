import './search-panel.scss';

const SearchPanel = ( {onSearchTextChanged} ) => {
    return (
        <div className='search_panel'>
            <label>Lookiing for</label>
            <input placeholder='start typing here...' onChange={e => onSearchTextChanged(e.target.value)}></input>
        </div>
    );
};

export default SearchPanel;