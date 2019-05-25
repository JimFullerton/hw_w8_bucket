import React from 'react';
import './main.css'

const Country = (props) => {

  console.log('in Country.js, logging props:', props);

  const handleDoneClick = (evt) => {
    ;
  }

  const done = props.bucketItem;

  console.log('done?', done);
  // const {index} = props.index;

  return (
    <div className='bucket-card'>
    <button onClick={handleDoneClick}>Mark As Done</button>
    <h4>{props.name}</h4>
    <p>{props.region} / {props.subregion}</p>
    <img src={props.flag} alt={props.name}/>
    </div>
  )

}

export default Country;


// <div className='bucket-card'>
// <button onClick={ handleDoneClick }>DONE</button>
// <h4>CtryID: {country}</h4>
// <p>Done flag: {done}</p>
// </div>
