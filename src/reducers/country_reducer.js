const countryReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_COUNTRIES':
    const newState = action.newCountries;
      return newState;

    default:
      return state;
  }
};

export default countryReducer;
