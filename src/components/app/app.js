import { Component } from "react";

import './app.scss';
import srcBest1 from '../../img/best-item-1.png';
import srcBest2 from '../../img/best-item-2.png';
import srcBest3 from '../../img/best-item-3.png';

import Header from "../header/header";
import About from "../about/about";
import BestItems from "../bestItems/bestItems";
import Footer from "../footer/footer";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../filter/filter";
import OurItems from "../ourItems/ourItems";
import ItemDetails from "../item-details/item-details";

class App extends Component {
    constructor(props) {
        super(props);
        const description = `Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        this.state = {
            currentPage: 'home', // home, our, foryou, itemdetail
            bestCoffees: [
                { id: 1, imgSrc: srcBest1, imgAlt: 'Best coffee 1', name: 'Solimo Coffee Beans 2 kg', price: 10.73, description },
                { id: 2, imgSrc: srcBest2, imgAlt: 'Best coffee 2', name: 'Presto Coffee Beans 1 kg', price: 15.99, description },
                { id: 3, imgSrc: srcBest3, imgAlt: 'Best coffee 3', name: 'AROMISTICO Coffee 1 kg', price: 6.99, description },
            ],
            coffees: [
                { id: 1, imgSrc: srcBest3, imgAlt: 'Coffee 1', name: 'AROMISTICO Coffee 1 kg', price: 6.99, country: 'Brazil', description },
                { id: 2, imgSrc: srcBest3, imgAlt: 'Coffee 2', name: 'ASDF Coffee 1 kg', price: 6.99, country: 'Kenya', description },
                { id: 3, imgSrc: srcBest3, imgAlt: 'Coffee 3', name: 'AROMISTICO Coffee 1 kg', price: 6.99, country: 'Columbia', description },
                { id: 4, imgSrc: srcBest3, imgAlt: 'Coffee 4', name: 'AQWERTY Coffee 1 kg', price: 6.99, country: 'Brazil', description },
                { id: 5, imgSrc: srcBest3, imgAlt: 'Coffee 5', name: 'AQWERTY Coffee 1 kg', price: 6.99, country: 'Brazil', description },
                { id: 6, imgSrc: srcBest3, imgAlt: 'Coffee 6', name: 'AROMISTICO Coffee 1 kg', price: 6.99, country: 'Brazil', description },
            ],
            selectedCoffee: {},
            searchText: '',
            filter: ''
        };
    }

    onPageChange = (linkValue) => {
        this.setState({
            currentPage: linkValue
        });
    }

    onItemClicked = (isBest, coffeeId) => {
        console.log('onItemClicked call: ', isBest, coffeeId);

        let selectedItem;
        if (isBest) {
            selectedItem = this.state.bestCoffees.find(x => x.id === coffeeId)
        }
        else {
            selectedItem = this.state.coffees.find(x => x.id === coffeeId)
        }

        this.setState({currentPage: 'itemdetail',
            selectedCoffee: selectedItem});
    }

    onSearchTextChanged = (searchText) => {
        this.setState({ searchText });
    }

    onFilterChanged = (filter) => {
        this.setState({ filter });
    }

    filterCoffees = (searchText, filter) => {
        let items = this.state.coffees;
        if (filter) {
            items = items.filter(c => c.country === filter)
        }

        return items.filter(c => c.name.toLowerCase().includes(searchText.toLowerCase()));
    }

    render() {
        let currentPage = this.state.currentPage;
        let pageChange = this.onPageChange;

        let coffees = this.filterCoffees(this.state.searchText, this.state.filter);

        if (currentPage === 'our') {
            return (
                <div className="app">
                    <Header currentPage={currentPage} onPageChange={pageChange} invertColor={false}></Header>            
                    <About currentPage={currentPage}></About>       
                    <hr className="horizontal_line mx-auto"></hr>
                    <div className="search_filter d-flex justify-content-center">
                        <SearchPanel onSearchTextChanged={this.onSearchTextChanged}></SearchPanel>
                        <Filter onFilterChanged={this.onFilterChanged}></Filter>
                    </div>
                    <OurItems onItemClicked={this.onItemClicked} coffees={coffees}></OurItems>
                    <Footer currentPage={currentPage} onPageChange={pageChange} invertColor={true}></Footer>
                </div>
            );            
        } else if (currentPage === 'foryou') {
            return (
                <div className="app">
                    <Header currentPage={currentPage} onPageChange={pageChange} invertColor={false}></Header>            
                    <About currentPage={currentPage}></About>       
                    <hr className="horizontal_line mx-auto"></hr>
                    <OurItems onItemClicked={this.onItemClicked} coffees={coffees}></OurItems>
                    <Footer currentPage={currentPage} onPageChange={pageChange} invertColor={true}></Footer>
                </div>
            );    
        } else if (currentPage === 'itemdetail') {
            return (
                <div className="app">
                    <Header currentPage={currentPage} onPageChange={pageChange} invertColor={false}></Header>            
                    <ItemDetails item={this.state.selectedCoffee}></ItemDetails>
                    <Footer currentPage={currentPage} onPageChange={pageChange} invertColor={true}></Footer>
                </div>
            );  
        }
        else {
            return (
                <div className="app">
                    <Header currentPage={currentPage} onPageChange={pageChange} invertColor={false}></Header>            
                    <About currentPage={currentPage}></About>       
                    <BestItems onItemClicked={this.onItemClicked} bestCoffees={this.state.bestCoffees}></BestItems>
                    <Footer currentPage={currentPage} onPageChange={pageChange} invertColor={true}></Footer>
                </div>
            );
        }
    }
}

export default App;