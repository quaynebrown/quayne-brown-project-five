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