import React from 'react';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ChatFlud from './components/ChatFlud';
import CreateMessage from './components/CreateMessage';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <ChatFlud />
      <CreateMessage/>
    </div>
  );
}

export default App;
