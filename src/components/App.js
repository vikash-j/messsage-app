import React from 'react';
import './App.css';
import Header from './Header';
import AddMessage from './AddMessage';
import MessageList from './MessageList';

function App() {
  const Messages = [
    {
      id: "1",
      name: "vik",
      messagess: "How are you!",
    },
    {
      id: "2",
      name: "vikash",
      messagess: "I am Fine!",
    },
  ];
  return (
    <div className="ui container">
      <Header/>
      <AddMessage/>
      <MessageList messages={Messages}/>
    </div>
  );
}

export default App;
