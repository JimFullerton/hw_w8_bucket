import { connect } from 'react-redux';
import React from 'react';
import './Country.css'

const Country = (props) => {

  console.log(props);

  const handleDoneClick = (evt) => {
    console.log('in Country, button click, logging evt', evt.target.value);
    const bucketId = evt.target.value;
    props.markAsDone(bucketId);
    console.log('other side of call');
  }

  const done = props.bucketItem;

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
    console.log('in dispatch, logging bucketId', bucketId);
    dispatch({
      type: 'MARK_AS_DONE',
      bucketId
    })
  }
})

export default connect(null, mapDispatchToProps)(Country);

// export default Country;
