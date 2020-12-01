import { Component } from 'react';

class Properties extends Component {

    render(){
        return(
            <div>
                <article key={this.props.availableDate}>
                    <div className="top-article">
                        <figure>
                            <img src={this.props.imageUrl} alt="house" />
                        </figure>
                        <ul className="details">
                            <li>$ {parseInt(this.props.cost.toFixed(2))}/month</li>
                            <li>Street Address: {this.props.streetAddress}</li>
                            <li>City: {this.props.city}</li>
                            <li><span>Bedroom: {this.props.bedroom}</span> </li>
                            <li><span>Bathroom: {this.props.bathroom}</span></li>
                        </ul>
                    </div>
                    <div className="description-container">
                        <h2>Description</h2>
                        <p>{this.props.description}</p>
                    </div>
                </article>
            </div>
        )
    }
}

export default Properties;