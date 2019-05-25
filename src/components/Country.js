import { connect } from 'react-redux';
import React from 'react';
import './Country.css'

const Country = (props) => {

  const handleDoneClick = (evt) => {
    const bucketId = evt.target.value;
    props.markAsDone(bucketId);
  }

  // const formatButton = (evt) => {
  //   if (props.bucketItem.done === true) {
  //     return (
  //       <button value={props.bucketItem.country} id='done-button' onClick={handleDoneClick}>Mark As Done</button>
  //     )
  //   } else {
  //     return (
  //       <button value={props.bucketItem.country} id='clicked-done-button'>Now Visited</button>
  //     )
  //   }
  // }

  return (
    <div className='grid-item' id='country-card'>
      <button value={props.bucketItem.country} id='done-button' onClick={handleDoneClick}>Mark As Done</button>
      <p id='country-name'>{props.name}</p>
      <p id='region-info'>{props.region} / {props.subregion}</p>
      <div id='flag-div' className='image'>
        <img id='flag-img' src={props.flag} alt={props.name}/>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  markAsDone(bucketId) {
    dispatch({
      type: 'MARK_AS_DONE',
      bucketId
    })
  }
})

export default connect(null, mapDispatchToProps)(Country);
