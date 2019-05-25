import React from 'react';
import Country from './Country';
import './main.css'

const ShowCountries = (props) => {

  const bucketList = props.bucket.map((bucketItem, index) => {
    // const countryName = props.countries[index].name;
    return <Country
      bucketItem={bucketItem}
      key={index}
      index={index}
      name={props.countries[bucketItem.country].name}
      region={props.countries[bucketItem.country].region}
      subregion={props.countries[bucketItem.country].subregion}
      flag={props.countries[bucketItem.country].flag}
    />
  });

  return (
    <div id='bucket-list'>
      {bucketList}
    </div>
  );

}

export default ShowCountries;
