import {
    ADMIN_FETCH_LOADING,
    ADMIN_FETCH_MESSAGE,
    ADMIN_FETCH_ALL,
    ADMIN_FETCH_SINGLE,
    ADMIN_FETCH_ERROR
  } from "./admin_types";
  
  const initial_state = {
    admin_loading: false,
    message: "",
    admins: [],
    singleAdmin: {},
    admin_error: ""
  };
  
  const admin_reducer = (state = initial_state, action) => {
    switch (action.type) {
      case ADMIN_FETCH_LOADING:
        return {
          ...state,
          admin_loading: true
        };
      case ADMIN_FETCH_MESSAGE:
        return {
          ...state,
          admin_loading: false,
          message: action.payload,
          admin_error: ""
        };
      case ADMIN_FETCH_ALL:
        return {
          ...state,
          admin_loading: false,
          admins: action.payload,
          admin_error: ""
        };
      case ADMIN_FETCH_SINGLE:
        return {
          ...state,
          admin_loading: false,
          singleAdmin: action.payload,
          admin_error: ""
        };
      case ADMIN_FETCH_ERROR:
        return {
          ...state,
          admin_loading: false,
          admin_error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default admin_reducer;