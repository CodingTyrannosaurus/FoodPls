import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>

      {/*<Route path='*' exact={true} component={Page404}/>*/}
    </Switch>
  </main>
);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        </header>
        <div>
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;
