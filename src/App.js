// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import List from './list/List';
import Login from './login/login';
import Hello from '../src/component/HelloComponent';

class App extends Component {

  render() {
    return (
      <div>
       <Hello />
     </div>
    );
  }
}
export default App;
