import React, { Component } from 'react';
import PickCountriesBox from './containers/PickCountriesBox.js';
import ShowCountriesBox from './containers/ShowCountriesBox.js';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getCountriesData();
  }

  render() {
    return (
      <>
        <PickCountriesBox />
        <ShowCountriesBox />
      </>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  getCountriesData() {
    dispatch(() => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(countriesData => {
        console.log('in app, fetched countriesData: ', countriesData);
        dispatch({
          type: 'ADD_COUNTRIES',
          newCountries: countriesData
        })
      })
    })
  }
})

export default connect(null, mapDispatchToProps)(App);
