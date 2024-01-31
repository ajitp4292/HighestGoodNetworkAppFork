import axios from 'axios';
import { ENDPOINTS } from '../utils/URL';
import {
  getWarningByUserId,
  postWarningsByUserId,
  deleteWarningByUserId,
  getCurrentWarnings,
} from '../constants/warning';

export const getWarningsByUserId = userId => {
  const url = ENDPOINTS.GET_WARNINGS_BY_USER_ID(userId);

  return async dispatch => {
    try {
      const res = await axios.get(url);
      const response = await dispatch(getWarningByUserId(res.data.warnings));
      return response.payload;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { error: error.response.data.message };
      } else {
        return { error: error.message };
      }
    }
  };
};

//trace to see if its being caleld on the backend
// gets called but isnt targetting the backend or calling
// as no log is being displayed
export const getAllCurrentWarnings = () => {
  const url = ENDPOINTS.GET_CURRENT_WARNINGS();
  console.log('dispatch called', url);
  return async dispatch => {
    try {
      const res = await axios.get(url);
      console.log('res', res);
      const response = await dispatch(getCurrentWarnings(res.data));
      return response.payload.warnings;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { error: error.response.data.message };
      } else {
        return { error: error.message };
      }
    }
  };
};
export const postWarningByUserId = warningData => {
  const { userId } = warningData;

  const url = ENDPOINTS.POST_WARNINGS_BY_USER_ID(userId);

  return async dispatch => {
    try {
      const res = await axios.post(url, warningData);
      const response = await dispatch(postWarningsByUserId(res.data));
      return response.payload.warnings;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { error: 'Error occured when posting' };
      } else {
        return { error: 'Something else went wrong' };
      }
    }
  };
};

export const deleteWarningsById = (warningId, personId) => {
  const url = ENDPOINTS.DELETE_WARNINGS_BY_USER_ID(personId);

  return async dispatch => {
    try {
      const res = await axios.delete(url, { data: { warningId } });
      const response = await dispatch(deleteWarningByUserId(res.data));
      return response.payload.warnings;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { error: error.response.data.message };
      } else {
        return { error: 'Something else went wrong' };
      }
    }
  };
};
