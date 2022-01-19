import Axios from 'axios';
import {
    ADMIN_FETCH_ALL, 
    ADMIN_FETCH_ERROR, 
    ADMIN_FETCH_LOADING, 
    ADMIN_FETCH_MESSAGE, 
    ADMIN_FETCH_SINGLE
} from './admin_types';
import history from "../../history";

const fetchLoading = () => {
    return {
      type: ADMIN_FETCH_LOADING
    };
  };
  
  const fetchMessage = message => {
    return {
      type: ADMIN_FETCH_MESSAGE,
      payload: message
    };
  };
  
  const fetchALL = admins => {
    return {
      type: ADMIN_FETCH_ALL,
      payload: admins
    };
  };
  
  const fetchSingle = admin => {
    return {
      type: ADMIN_FETCH_SINGLE,
      payload: admin
    };
  };
  
  const fetchError = error => {
    return {
      type: ADMIN_FETCH_ERROR,
      payload: error
    };
  };
  
  export const signin_action = payload => {
    return dispatch => {
      dispatch(fetchLoading());
      Axios({
        method: "POST",
        url: process.env.REACT_APP_BASE_URL + "/admin/signin",
        data: {
          username: payload.username,
          password: payload.password
        },
        headers: { api_key: process.env.REACT_APP_API_KEY }
      })
        .then(res => {
          const result = res.data;
          console.log(result)
          history.push({ pathname: "/event", state: result });
          dispatch(fetchMessage(result));
          dispatch(fetchSingle(result));
        })
        .catch(err => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };
  
  export const get_admin_action = () => {
    return dispatch => {
      dispatch(fetchLoading());
      Axios({
        method: "GET",
        url: process.env.REACT_APP_BASE_URL + "/admin",
        headers: { api_key: process.env.REACT_APP_API_KEY }
      })
        .then(res => {
          const result = res.data;
          dispatch(fetchALL(result));
        })
        .catch(err => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };
  
  export const change_pwd_action = payload => {
    return dispatch => {
      dispatch(fetchLoading());
      Axios({
        method: "PATCH",
        url: process.env.REACT_APP_BASE_URL + "/admin",
        data: {
          id: payload.id,
          password: payload.password,
          newPassword: payload.newPassword
        },
        headers: { api_key: process.env.REACT_APP_API_KEY }
      })
        .then(res => {
          const result = res.data;
          history.push({ pathname: "/event", state: result });
          dispatch(fetchMessage(result));
        })
        .catch(err => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };
  
  export const get_verification_code_action = () => {
    return dispatch => {
      dispatch(fetchLoading());
      Axios({
        method: "GET",
        url: process.env.REACT_APP_BASE_URL + "/admin/verification",
        headers: { api_key: process.env.REACT_APP_API_KEY }
      })
        .then(res => {
          const result = res.data;
          dispatch(fetchALL(result));
        })
        .catch(err => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };
  
  export const forgot_pwd_action = payload => {
    return dispatch => {
      dispatch(fetchLoading());
      Axios({
        method: "PATCH",
        url: process.env.REACT_APP_BASE_URL + "/admin/forgot",
        data: {
          verificationCode: payload.verificationCode,
          newPassword: payload.newPassword,
          confirmPassword: payload.confirmPassword
        },
        headers: { api_key: process.env.REACT_APP_API_KEY }
      })
        .then(res => {
          const result = res.data;
          history.push("/event");
          dispatch(fetchMessage(result));
        })
        .catch(err => {
          const error = err.response;
          dispatch(fetchError(error));
        });
    };
  };