import {Component} from 'react';

class Form extends Component {
    render(){
        return(
            <div>
                <form>
                    <div className="input-container">
                        <label htmlFor="city">City name: </label>
                        <select name="city" id="city">
                            <option value="option-1">option-1</option>
                            <option value="option-2">option-2</option>
                            <option value="option-3">option-3</option>
                            <option value="option-4">option-4</option>
                            <option value="option-5">option-5</option>
                        </select>
                    </div>

                    <div className="input-container">
                        <label htmlFor="sort-by">Sort by: </label>
                        <select name="sort-by" id="sort-by">
                            <option value="price">Price</option>
                            <option value="date">Available date</option>
                        </select>
                    </div>

                    <div className="input-container">
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;

















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
























