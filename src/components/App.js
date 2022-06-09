import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddMessage from "./AddMessage";
import MessageList from "./MessageList";

function App() {
  const LOCAL_STORAGE_KEY = "messages";
  const [messages, setMessages] = useState([]);
  
  const addMessageHandler = (message) =>{
    setMessages([...messages, {id: uuidv4(), ...message}]);
  };

  const removeMessageHandler = (id) => {
    const newMessageList = messages.filter((message) =>{
      return message.id !== id;
    });

    setMessages(newMessageList);
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  },[messages]);

  useEffect(() => {
    const retrivemessages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrivemessages) {
      setMessages(retrivemessages);
    }
  },[]);

  return (
    <div className="ui container">
      <Header/>
      <AddMessage addMessageHandler={addMessageHandler}/>
      <MessageList messages={messages} getMessageId={ removeMessageHandler }/>
    </div>
  );
}

export default App;
