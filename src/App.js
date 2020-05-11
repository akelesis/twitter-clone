import React from 'react';
import './App.css';

import Feed from './components/Feed/Feed'
import Menu from './components/Menu/Menu'
import SidePanel from './components/SidePanel/SidePanel'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Feed name="Marcus Tavares" tweetsNumber={75}></Feed>
      <SidePanel></SidePanel>
    </div>
  );
}

export default App;
