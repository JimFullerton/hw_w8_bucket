import React, { Component } from 'react';
import './main.css'

class PickCountries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countryPick: 0,
      filterLetter: null
    }
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSelectLetter = this.handleSelectLetter.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newBucketItem = {
      country: this.state.countryPick,
      done: false
    }
    this.props.addToBucket(newBucketItem);
  }

  handleCountryChange(evt) {
    this.setState({countryPick: evt.target.value});
  }

  selectOptions() {
    if (this.state.filterLetter == null) {
      return this.props.countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
      });
    } else {
      let filteredCountries = []
      for (var i = 0; i < this.props.countries.length; i++) {
        let firstLetter = this.props.countries[i].name.slice(0,1)
        if (firstLetter === this.state.filterLetter) {
          let country = {details: this.props.countries[i], indexNum: i}
          filteredCountries.push(country)
        };
      };
      return filteredCountries.map((country) => {
        return <option value={country.indexNum} key={country.indexNum}>{country.details.name}</option>
      });
    };
  };

  handleSelectLetter(evt) {
    let keyLetter = evt.target.value;
    let keyIndex = 0;
    for (var i = 0; i < this.props.countries.length; i++) {
      let firstLetter = this.props.countries[i].name.slice(0,1)
      if (firstLetter === keyLetter) {
        keyIndex = i;
        break;
      };
    };
    this.setState({filterLetter: keyLetter, countryPick: keyIndex});
  }

  filterLetters() {
    let letters=("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("")
    return letters.map((letter, index) => {
      return <option value={letter} key={index} onClick={this.handleSelectLetter}>{letter}</option>
    });
  }

  render() {
    return (
      <div id='pick-form-container'>
        <h1>Bucket List App</h1>

        <div className='flex'>
          Filter: {this.filterLetters()}
        </div>

        <form onSubmit={this.handleFormSubmit} autoComplete='off'>
        <label htmlFor='countryPick'>Pick: </label>
          <select
            name='countryPick'
            id='countryPick'
            value={this.state.countryPick}
            onChange={this.handleCountryChange}
          >
            {this.selectOptions()}
          </select>
          <input type='submit' value='Add To List' />
          <h4 id="list-divider"className="ui horizontal divider header">The List</h4>
        </form>
      </div>
    )
  }

}

export default PickCountries;
