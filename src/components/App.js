import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { GiphyFetch } from "@giphy/js-fetch-api";
import "./App.css";
import Header from "./Header";
import AddMessage from "./AddMessage";
import MessageList from "./MessageList";



function App() {
  
  const giphy = new GiphyFetch(process.env.React_APP_GIPHY_KEY);
    const [text, setText] = useState([]);
    const [results, setResults] = useState([]);


  const LOCAL_STORAGE_KEY = "messages";
  const [messages, setMessages] = useState([]);
  //console.log(messages);

  const textData = (gif) => { 
  const textList = messages.filter((message) =>{
    return message.gif !== gif;
  });
  setText(textList);
  }
  
  const apiCall = async () => {
    const res = await giphy.animate(text, {limit: 20})
    console.log(res)
    setResults(res.data)
  }
  
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
      <AddMessage addMessageHandler={addMessageHandler} results={apiCall} />
      <MessageList messages={messages} getMessageId={ removeMessageHandler }/>
    </div>
  );
}

export default App;
