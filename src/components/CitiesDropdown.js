import { Component, Fragment } from 'react';

class CitiesDropdown extends Component {

    render() {
        return (
            <Fragment>
                <option key={this.props.city} value={this.props.city}>{this.props.city}</option>
            </Fragment>
        )
    }
}

export default CitiesDropdown;