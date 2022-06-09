import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddMessage from "./AddMessage";
import MessageList from "./MessageList";

function App() {
  const [messages, setMessages] = useState([]);
  
  const addMessageHandler = (message) =>{
    console.log(message)
    setMessages([...messages, message]);
  };

  return (
    <div className="ui container">
      <Header/>
      <AddMessage addMessageHandler={addMessageHandler}/>
      <MessageList messages={messages}/>
    </div>
  );
}

export default App;
