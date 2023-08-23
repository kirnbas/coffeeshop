import './search-panel.scss';

const SearchPanel = () => {
    return (
        <div className='search_panel'>
            <label>Lookiing for</label>
            <input placeholder='start typing here...'></input>
        </div>
    );
};

export default SearchPanel;