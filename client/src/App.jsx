import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

import Home from './components/Home';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
})

function App() {

  useEffect(() => {
    document.body.classList.add('bg-black', 'text-white');
  }, [])

  return (
    <ApolloProvider client={client}>
      <div className="">
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
