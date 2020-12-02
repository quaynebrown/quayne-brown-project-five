import { Component } from 'react';
import firebase from './components/firebase.js';
import Header from './components/Header.js';
// import Radio from './components/Radio.js';
import SearchForm from './components/SearchForm.js';
import AddProperty from './components/AddPropertyFrom.js';
// import CitiesDropdown from './components/CitiesDropdown.js';
import Tiles from './components/Properties.js';
import Footer from './components/Footer.js';
import './App.css';

// images import
import img1 from  './assets/user-image/user-image-2.jpg';
// import img2 from './assets/user-image/user-image-1.jpg';


class App extends Component {
  constructor(){
    super();
    this.state = {
      properties : [],
      cities: [],
      search: true
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (data) => {
      const firebaseDataObj = data.val();
      // make a new empty array
      const propertiesArray = [];
      const cityArray = [];

       // use the for in loop to loop through the object
      // extract the key and value of the object
      for (let properties in firebaseDataObj) {
        // let propertyVal = firebaseDataObj[propertyKey]
        
        const { availableDate, bathroom, bedroom, cost, city, description, imageUrl, isAvailable, streetAddress } = firebaseDataObj[properties];
        // format it to the key and value of the object
        const formattedObj = {
          availableDate: availableDate,
          cost: cost,
          bathroom: bathroom,
          bedroom: bedroom,
          city: city,
          streetAddress: streetAddress,
          description: description,
          imageUrl: imageUrl,
          isAvailable: isAvailable
        }

        if(!cityArray.includes(city)){
          cityArray.push(city)
        }

        // push this new item into the array
        propertiesArray.push(formattedObj)

        // setState with the new array
        this.setState({
          properties: propertiesArray,
          cities: cityArray
        })
      }

    });
  }

  handleRadioChange = (e) => {
    console.log(e)
    this.setState({
      search: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        {/* HEADER COMPONENT HERE */}
        <Header />

        {/* MAIN SECTION START */}
        <main>
          <section id='form-section' className='form-section'>
            <div className="wrapper select-form">
              {/* <Radio onChange={this.handleRadioChange} /> */}
            </div>
            <div className="wrapper">
              {/* FORM COMPONENT HERE */}
              <AddProperty />
              {/* <SearchForm cities={this.state.cities}/> */}
            </div>
          </section>

          {/* Tiles will go here */}
          <section id="properties" className="properties">
            <div className="wrapper">
              {
                this.state.properties.map((element) => {
                  // console.log(element)
                  return(
                    <Tiles 
                      key={element.streetAddress}
                      streetAddress={element.streetAddress}
                      cost={element.cost}
                      city={element.city}
                      bedroom={element.bedroom}
                      bathroom={element.bathroom}
                      imageUrl={img1}
                      description={element.description}
                    />
                  )
                })
              }
            </div>
          </section>
        </main>
        {/* MAIN SECTION END */}

        {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}
      </div>
    );
  }
}

export default App;
