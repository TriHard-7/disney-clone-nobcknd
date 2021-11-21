import React from 'react';
import Header from './components/Header'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
// import Detail from './components/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch >
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
