import { Component } from 'react';
import firebase from './firebase.js';

class AddProperty extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: './assets/user-image/user-image-1.jpg',
            isAvailable: true
        }
    }

    handleCityChange = (e) => {
        let city = e.target.value.trim();
        city = city.charAt(0).toUpperCase() + city.slice(1); // take the character at 0 index then extract characters from index and concat them with the 0 index
        this.setState({
            city: city
        })
    }

    handleDescriptionChange = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleBathroomChange = (e) => {
        this.setState({
            bathroom: e.target.value
        })
    }

    handleBedroomChange = (e) => {
        this.setState({
            bedroom: e.target.value
        })
    }

    handleCostChange = (e) => {
        this.setState({
            cost: e.target.value.trim()
        })
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleStreetAddress = (e) => {
        this.setState({
            streetAddress: e.target.value.trim()
        })
    }

    handleAddClick = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.state);
    }

    render() {
        return (
            <div>
                <form name="add-property">
                    <input type="hidden" value="./assets/user-image/user-image-1.jpg" />
                    <div>
                        <label htmlFor="cost">Cost: </label>
                        <input type="text" onChange={this.handleCostChange} name="cost" id="cost" required />
                    </div>

                    <div>
                        <label htmlFor="street-address">Street Address: </label>
                        <input type="text" onChange={this.handleStreetAddress} name="street-address" id="street-address" required />
                    </div>

                    <div>
                        <label htmlFor="city">City: </label>
                        <input type="text" name="city" id="city" onChange={this.handleCityChange} required />
                    </div>

                    <div>
                        <label htmlFor="bedroom">Bedroom: </label>
                        <input type="number" onChange={this.handleBedroomChange} min="1" name="bedroom" id="bedroom" required />
                    </div>
                    <div>
                        <label htmlFor="bathroom">Bathroom: </label>
                        <input type="number" onChange={this.handleBathroomChange} min="1" name="bathroom" id="bathroom" required />
                    </div>
                    <div>
                        <label htmlFor="desc">
                            Description:
                            <textarea id="desc" onChange={this.handleDescriptionChange} required></textarea>
                        </label>
                    </div>

                    <div>
                        <button onClick={this.handleAddClick} type="submit">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProperty;