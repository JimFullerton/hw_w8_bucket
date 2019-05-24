const countryReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_COUNTRIES':
      return [...state, action.newCountries];

    default:
      return state;
  }
};

export default countryReducer;
