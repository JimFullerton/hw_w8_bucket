import { connect } from 'react-redux';
import PickCountries from '../components/PickCountries';

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  }
};

const mapDispatchToProps = (dispatch) => ({
  addToBucket(newBucketItem) {
    dispatch({
      type: 'ADD_TO_BUCKET',
      newBucketItem
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PickCountries);
