import { Component } from 'react';

class Radio extends Component {

    handleClick = (event) => {
        this.props.handleChange(event)
    }

    render() {
        return (
            <div className="wrapper select-form">
                <h2>Please select</h2>
                <div className="radio-container">
                    <div>
                        <input type="radio" id="search" name="select-form" onClick={this.handleClick} value="search" />
                        <label htmlFor="search">Search Properties</label>
                    </div>
                    <div>
                        <input type="radio" id="add" name="select-form" onClick={this.handleClick} value="add" />
                        <label htmlFor="add">Add Property</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Radio;