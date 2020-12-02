function Radio(){
    return(
        <div>
            <h2>Please select</h2>
            <label htmlFor="search">Search Properties</label>
            <input type="radio" id="search" name="select-form" value="true" />
            <span> | </span>
            <label htmlFor="add">Add Property</label>
            <input type="radio" id="add" name="select-form" value="false" />
        </div>
    )
}

export default Radio;