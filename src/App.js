import { Component } from 'react';
import firebase from './components/firebase.js';
import Header from './components/Header.js';
import Radio from './components/Radio.js';
import SearchForm from './components/SearchForm.js';
import AddProperty from './components/AddPropertyFrom.js';
import Tiles from './components/Properties.js';
import Footer from './components/Footer.js';
import './App.css';

// images import
import img1 from './assets/user-image/user-image-2.jpg';
// import img2 from './assets/user-image/user-image-1.jpg';


class App extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      cities: [],
      selectedPropertiesArray: [],
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
        // let propertyVal = firebaseDataObj[propertyKey]

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

  // 1. pass an array of property objects as arg
  // 2. sort each pro
  // sortByPrice = (inputArr) => {
  //   let copyOfinputArr = [...inputArr];
  //   let n = copyOfinputArr.length;
  //   for (let i = 1; i < n; i++) {
  //     console.log(n)
  //     // Choosing the first element in our unsorted subarray
  //     let current = copyOfinputArr[i].cost;
  //     // The last element of our sorted subarray
  //     let j = i - 1;
  //     while ((j > -1) && (current < copyOfinputArr[j].cost)) {
  //       copyOfinputArr[j + 1] = copyOfinputArr[j];
  //       j--;
  //     }
  //     copyOfinputArr[j + 1] = current;
  //   }
  //   // return copyOfinputArr;
  //   this.setState({
  //     selectedPropertiesArray: copyOfinputArr
  //   })
  // }

  filterByCity = (selectedCity) => {
    console.log(selectedCity)

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
            <div className="wrapper">
              {
                this.state.selectedPropertiesArray.map((element) => {
                  // console.log(element)
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
