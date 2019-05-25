import React, { Component } from 'react';
import './main.css'

class PickCountries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      filterLetter: null
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectLetter = this.handleSelectLetter.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.reset = this.reset.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newBucketItem = {
      country: "XXX", // dummy value for testing
      done: false
    }
    this.props.addToBucket(newBucketItem);
    // this.reset();
  }

  // reset() {
  //   this.setState({
  //     selectedIndex: 0,
  //     filterLetter: null
  //   });
  // }

  handleSelectChange(evt) {
    this.setState({selectedIndex: evt.target.value});
    // this.props.handleSelectedCountry(evt.target.value);
  }

  createOptions() {
    if (this.state.filterLetter == null) {
      return this.props.countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
      });
    } else {
      let countriesArray = []
      for (var i = 0; i < this.props.countries.length; i++) {
        let name = this.props.countries[i].name.slice(0,1)
        if (name == this.state.filterLetter) {
          let country = {name: this.props.countries[i], index: i}
          countriesArray.push(country)
        }
      }
      for (let country of this.props.countries) {

      }
      return countriesArray.map((country) => {

        return <option value={country.index} key={country.index}>{country.name.name}</option>
      });
    }
  }

  createLetters() {
    let letters=("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("")
    return letters.map((letter, index) => {
      return <option value={letter} key={index} onClick={this.handleSelectLetter}>{letter}</option>
    });
  }

  handleSelectLetter(evt) {
    this.setState({filterLetter: evt.target.value});
  }

  render() {
    return (
      <>
      <div className='flex'>
        {this.createLetters()}
      </div>

      <form onSubmit={this.handleFormSubmit} autoComplete='off'>
        <select value={this.state.selectedIndex} onChange={this.handleSelectChange}>
          {this.createOptions()}
        </select>
        <input type='submit' value='Add To List' />
      </form>
      </>
    )
  }

}

export default PickCountries;
