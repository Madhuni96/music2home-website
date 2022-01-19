import Axios from 'axios';
import {
    EVENT_FETCH_ALL, 
    EVENT_FETCH_ERROR, 
    EVENT_FETCH_LOADING, 
    EVENT_FETCH_MESSAGE, 
    EVENT_FETCH_SINGLE
} from './event_types';
import history from "../../history";

const fetchLoading = () => {
    return {
      type: EVENT_FETCH_LOADING
    };
  };
  
  const fetchMessage = message => {
    return {
      type: EVENT_FETCH_MESSAGE,
      payload: message
    };
  };
  
  const fetchALL = events => {
    return {
      type: EVENT_FETCH_ALL,
      payload: events
    };
  };
  
  const fetchSingle = event => {
    return {
      type: EVENT_FETCH_SINGLE,
      payload: event
    };
  };
  
  const fetchError = error => {
    return {
      type: EVENT_FETCH_ERROR,
      payload: error
    };
  };

  export const save_event_action = (formData) => {
      return(dispatch) => {
          dispatch(fetchLoading());
          Axios({
              method: "POST",
              url: process.env.REACT_APP_BASE_URL + "/event",
              data: formData,
              headers: { api_key: process.env.REACT_APP_API_KEY }
          })
          .then(() => {
              dispatch(fetchMessage("Saved successfully"));
          })
          .catch((err) => {
              const error = err.reponse;
              dispatch(fetchError(error));
          })
      }
  }

  export const get_all_events_action = () => {
    return (dispatch) => {
      dispatch(fetchLoading());
      Axios({
        method: "GET",
        url: process.env.REACT_APP_BASE_URL + "/event",
        headers: { api_key: process.env.REACT_APP_API_KEY },
      })
        .then((res) => {
          const result = res.data;
          console.log("Eventssss")
          dispatch(fetchALL(result));
        })
        .catch((err) => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };

  export const get_an_event_by_id_action = (id) => {
    return (dispatch) => {
      dispatch(fetchLoading());
      Axios({
        method: "GET",
        url: process.env.REACT_APP_BASE_URL + "/event/" + id,
        headers: { api_key: process.env.REACT_APP_API_KEY },
      })
        .then((res) => {
          const result = res.data;
          dispatch(fetchSingle(result));
        })
        .catch((err) => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };

  export const update_event_action = (eventId, formData) => {
    return (dispatch) => {
      dispatch(fetchLoading());
      Axios({
        method: "PATCH",
        url: process.env.REACT_APP_BASE_URL + "/event/" + eventId,
        data: formData,
        headers: { api_key: process.env.REACT_APP_API_KEY },
      })
        .then(() => {
          dispatch(fetchMessage("Updated successfully"));
        })
        .catch((err) => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };
  
  export const delete_event_action = (id) => {
    return (dispatch) => {
      dispatch(fetchLoading());
      Axios({
        method: "DELETE",
        url: process.env.REACT_APP_BASE_URL + "/event/" + id,
        headers: { api_key: process.env.REACT_APP_API_KEY },
      })
        .then(() => {
          dispatch(fetchMessage("Deleted successfully"));
        })
        .catch((err) => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };