import React, { useEffect } from 'react';
import { getApiMessages } from '../Redux/slices/MessagesReducer';
import store from '../Redux/ConfigureStore';
import { useSelector } from 'react-redux';

const Greeting = () => {
 
    useEffect(()=>{
     store.dispatch(getApiMessages());
    },[])

const messages = useSelector((state) => state.Messages);
  return (
    <div className="home-page">
      <h1>Messages from rails API</h1>
      <p className="message">{messages.id}.{" "} {messages.greeting}</p>
    </div>
 
  );
        
};

export default Greeting;
