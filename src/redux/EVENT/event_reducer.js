import {
    EVENT_FETCH_LOADING,
    EVENT_FETCH_MESSAGE,
    EVENT_FETCH_ALL,
    EVENT_FETCH_SINGLE,
    EVENT_FETCH_ERROR
  } from "./event_types";
  
  const initial_state = {
    event_loading: false,
    message: "",
    events: [],
    singleEvent: {},
    event_error: ""
  };
  
  const event_reducer = (state = initial_state, action) => {
    switch (action.type) {
      case EVENT_FETCH_LOADING:
        return {
          ...state,
          event_loading: true
        };
      case EVENT_FETCH_MESSAGE:
        return {
          ...state,
          event_loading: false,
          message: action.payload,
          event_error: ""
        };
      case EVENT_FETCH_ALL:
        return {
          ...state,
          event_loading: false,
          events: action.payload,
          event_error: ""
        };
      case EVENT_FETCH_SINGLE:
        return {
          ...state,
          event_loading: false,
          singleEvent: action.payload,
          event_error: ""
        };
      case EVENT_FETCH_ERROR:
        return {
          ...state,
          event_loading: false,
          event_error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default event_reducer;