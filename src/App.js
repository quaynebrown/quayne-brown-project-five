import { Component } from 'react';
import firebase from './components/firebase.js';
import Header from './components/Header.js';
import Radio from './components/Radio.js';
import SearchForm from './components/SearchForm.js';
import AddProperty from './components/AddPropertyFrom.js';
import Tiles from './components/Properties.js';
import Footer from './components/Footer.js';
import './App.css';

// image import
import img1 from './assets/user-image/user-image-2.jpg'; //I am using this image because I don't know how to add image to the database

class App extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      cities: [],
      selectedPropertiesArray: [],
      selectedCity: '- Show all -',
      radio: {
        formOption: 'search'
      }
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (data) => {
      const firebaseDataObj = data.val();
      // make a new empty array
      const propertiesArray = [];
      const cityArray = ['- Show all -'];

      // use the for in loop to loop through the object
      // extract the key and value of the object
      for (let properties in firebaseDataObj) {
        const { availableDate, bathroom, bedroom, cost, city, description, imageUrl, isAvailable, streetAddress } = firebaseDataObj[properties];
        // format it to the key and value of the object
        const formattedObj = {
          key: properties,
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

        if (!cityArray.includes(city)) {
          cityArray.push(city)
        }

        // push this new item into the array
        propertiesArray.push(formattedObj)

        // setState with the new array
        this.setState({
          properties: propertiesArray,
          selectedPropertiesArray: propertiesArray,
          cities: cityArray
        })
      }

    });
  }

  handleRadioChange = (e) => {
    this.setState({
      radio: { formOption: e.target.value }
    })
  }

  filterByCity = (selectedCity) => {
    this.setState({
      selectedCity: selectedCity
    })

    if (selectedCity === '- Show all -'){
      this.setState({
        selectedPropertiesArray: this.state.properties
      })
    }else{
      const copyOfProperties = [...this.state.properties];
  
      const filteredCityArray = copyOfProperties.filter((propertyObj) => {
        return propertyObj.city === selectedCity;
      })
  
      this.setState({
        selectedPropertiesArray: filteredCityArray
      })
    }
  }

  render() {
    return (
      <div className="App">
        {/* HEADER COMPONENT HERE */}
        <Header />

        {/* MAIN SECTION START */}
        <main>
          <section id='form-section' className='form-section'>
            <Radio handleChange={this.handleRadioChange} />

            <div className="wrapper">
              {/* FORM COMPONENT HERE */}
              {
                // display form based on which option is selected
                this.state.radio.formOption === 'search' ? <SearchForm filterByCity={this.filterByCity} sortBy={this.sortByPrice} properties={this.state.selectedPropertiesArray} cities={this.state.cities.sort()} /> : <AddProperty />

              }
            </div>
          </section>

          {/* Tiles will go here */}
          <section id="properties" className="properties">
             {
               this.state.properties.length > 0 ?
                this.state.selectedCity !== '- Show all -' ?
                  <h3>Now showing properties in {this.state.selectedCity}</h3> : 
                  <h3>Showing all properties</h3> : <h3>There is currently no available property to look at.</h3>
              }
            <div className="wrapper">
              {
                this.state.selectedPropertiesArray.map((element) => {
                  return (
                    <Tiles
                      key={element.key}
                      streetAddress={element.streetAddress}
                      cost={element.cost}
                      city={element.city}
                      bedroom={element.bedroom}
                      bathroom={element.bathroom}
                      imageUrl={img1}
                      description={element.description}
                      firebaseKey={element.key}
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
