/**
 * createBy: kg 2018-8-28
 * 
 */
import React, { Component } from 'react';
import images from './images';
import MyWallet from '../pages/MyWallet';
import MyBalance from '../pages/MyWallet/MyBalance';
import AvailableBalance from '../pages/MyWallet/AvailableBalance';
import TransactionDetail from '../pages/MyWallet/TransactionDetail';
import GiftCards from '../pages/MyWallet/GiftCards';
import Footer from '../pages/MyWallet/Footer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';

class App extends React.Component{

  state = {}

  render() {
    return (
      <div>
        <h2>
          Welcome to italki
        </h2>
      </div>
    );
  }

  

}

export default App;
