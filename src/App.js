import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import DevelopersList from './components/DevelopersList';
import Homepage from './components/Homepage';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className='App'>
      <Toolbar />
      <Switch>
        {/* <h6>React+Redux Codaisseur Coders</h6> */}
        <Route path='/developers' component={DevelopersList} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
