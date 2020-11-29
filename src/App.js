import { Component } from 'react';
import Form from './components/Form.js'
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <header>
          <nav>
            <p>Quayne's property management portal</p>
          </nav>
        </header>

        <main>
          <section id='form-section' className='form-section'>
            <div className="wrapper">
              <Form />
            </div>
          </section>

          <section id="properties" className="properties">

          </section>
        </main>

        <footer>
          <div className="wrapper">
            <p>Copyright &copy; 2020. Created at <a href='https://junocollege.com/'>Juno College</a> by Quayne Brown.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
