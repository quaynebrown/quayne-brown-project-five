import { Component } from 'react';

class Radio extends Component {
    constructor() {
        super();
        this.state = {
            selectedForm: 'search'
        }
    }

    handleClick = (event) => {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="wrapper select-form">
                <h2>Please select</h2>
                <label htmlFor="search">Search Properties</label>
                <input type="radio" id="search" name="select-form" onClick={this.handleClick} value="search" />
                <span> | </span>
                <label htmlFor="add">Add Property</label>
                <input type="radio" id="add" name="select-form" onClick={this.handleClick} value="add" />
            </div>
        )
    }
}

export default Radio;