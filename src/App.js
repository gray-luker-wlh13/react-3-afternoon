import React, {Component} from 'react';
import Head from './Components/Head';
import MainContext from './Components/MainContent';
import data from './data';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      people: data,
      i: 0
    }
  }

  handleNext = () => {
    if(this.state.i >= 24){
      this.setState({
        i: 0
      })
    } else if(this.state.i >= 0){
      this.setState({
        i: this.state.i + 1
      })
    }
  }

  handlePrevious = () => {
    if(this.state.i <= 0){
      this.setState({
        i: 24
      })
    } else if(this.state.i >= 0){
      this.setState({
        i: this.state.i - 1
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Head />
        <MainContext person={this.state.people[this.state.i]} index={this.state.i}/>
        <section className='footer'>
          <button 
            name='previous'
            onClick={this.handlePrevious}
            className='nav-buttons'
          >
          {`< Previous`}
          </button>
            <div className='center'>
            <button className='center-buttons'>Edit</button>
            <button className='center-buttons'>Delete</button>
            <button className='center-buttons'>New</button>
          </div>
        <button 
          name='next' 
          onClick={this.handleNext}
          className='nav-buttons'
        >
          {`Add >`}
        </button>
      </section>
      </div>
    );
  }
}

export default App;
