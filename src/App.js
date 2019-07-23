import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './container/Section/Section';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Section} />
          </Switch>
        
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

