import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BitcoinState from './context/bitcoin/BitcoinState'
import Home from './components/Home';


import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.body.classList.add('bg-red-500');
  }, [])

  return (
    <BitcoinState>
      <div className="">
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </BitcoinState>
  );
}

export default App;
