import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_DATA = 'GET_DATA';
const messagesUrl = 'http://localhost:3000/api/v1/messages';

const MessagesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_DATA}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const getApiMessages = createAsyncThunk(GET_DATA,
  () => axios.get(messagesUrl).then((response) => {
    const MessagesObj = response.data;

    return MessagesObj;
  }));

export default MessagesReducer;
