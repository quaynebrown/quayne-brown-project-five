import { Component } from 'react';
import firebase from './firebase.js';

class Properties extends Component {
    handleClick = () => {
        const dbRef = firebase.database().ref(this.props.firebaseKey);

        dbRef.remove();
    }

    render() {
        return (
            <article key={this.props.firebaseKey}>
                <div className="top-article">
                    <figure>
                        <img src={this.props.imageUrl} alt="house" />
                    </figure>
                    <ul className="details">
                        <li>$ {this.props.cost}/month</li>
                        <li>Street Address: {this.props.streetAddress}</li>
                        <li>City: {this.props.city}</li>
                        <li><span>Bedroom: {this.props.bedroom}</span> </li>
                        <li><span>Bathroom: {this.props.bathroom}</span></li>
                    </ul>
                </div>
                <div className="description-container">
                    <h3>Description</h3>
                    <p>{this.props.description}</p>
                </div>
                <div className="delete-button-container">
                    <button className="delete" onClick={this.handleClick}>Delete</button>
                </div>
            </article>
        )
    }
}

export default Properties;