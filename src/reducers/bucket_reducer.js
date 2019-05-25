const bucketReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TO_BUCKET':
      return [...state, action.newBucketItem]

    case 'MARK_AS_DONE':
      return state.map((element) => {
        if (element.country == action.bucketId)
          return {...element, done: true};
        else
          return element;
      })

    default:
      return state
  }
}

export default bucketReducer;
