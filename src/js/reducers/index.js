import { ADD_NUM } from "../constants/action-types";

const initialState = {
  num: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return {
        ...state,
        // articles: state.articles.concat(action.payload) 
        num: state.num + action.payload
      };
    default:
      return state;
  }
};


export default rootReducer;