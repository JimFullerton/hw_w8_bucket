import { connect } from 'react-redux';
import ShowCountries from '../components/ShowCountries';

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    bucket: state.bucket
  }
};

const mapDispatchToProps = (dispatch) => ({
  markAsDone(bucketId) {
    dispatch({
      type: 'MARK_AS_DONE',
      bucketId
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowCountries);
