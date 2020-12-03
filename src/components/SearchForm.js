import { Component } from 'react';
import CityOptions from './CitiesDropdown.js';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            selectedSortOption: ''
        }
    }

    handleCitySelection = (event) => {
        this.props.filterByCity(event.target.value);
    }

    // handleSortSelection = (event) => {

    //     const sortOption = event.target.value;
    //     // this.setState({ selectedSortOption: sortOption })

    //     console.log(event.target.value);
    // }

    render() {
        return (
            <div>
                <form>
                    <div className="input-container">
                        <label htmlFor="city">City name: </label>
                        <select name="city" id="city" onChange={this.handleCitySelection}>
                            {
                                this.props.cities.map((item) => {
                                    return (
                                        <CityOptions city={item} />
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="input-container">
                        <label htmlFor="sort-by">Sort by: </label>
                        <select
                            name="sort-by"
                            id="sort-by"
                            onChange={this.handleSortSelection}
                            value={this.state.selectedSortOption}>
                            <option value="lowFirst" selected>Price (low - high)</option>
                            <option value="highFirst">Price (high - low)</option>
                        </select>
                    </div>

                    {/* <div className="input-container">
                        <button type="submit">Search</button>
                    </div> */}
                </form>
            </div>
        )
    }
}

export default SearchForm;

















// create a component that will configure firebase on react
// make reference to the database
// componentDidMount
    // Add each property from the database object to state
        // loop through the database and store each property in a array in state
        // loop trough the array and display each property on the page

// create components for different sections
    // Header component
    // form component
    // tiles component
        // could have sub components for the tiles (optional)
    // footer component

// create fail safe component
    // Display errMsg if database is down

// Adding a property
    // onClick - prompt the user to fill in the necessary input
        // store the information in a property object
    // onSubmit- Push the information to the database

// Deleting a property
    // take the ID of the property that has been clicked on and pass to the database to delete

// filter
    // on city change - filter through the array and only display properties that are in the selected city
























