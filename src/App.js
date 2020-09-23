import React from 'react';
import './App.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ChatFlud from './components/ChatFlud';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <ChatFlud/> 
    </div>
  );
}

export default App;
