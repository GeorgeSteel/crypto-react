import React, { Component } from 'react';
import img from './cryptomonedas.png';
import Form from './components/Form';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src={ img } alt="crypto" className="logotipo"/>
          </div>
          <div className="one-half column">
            <h1>Quotes Cryptocurrencies Instantly</h1>
            <Form/>
          </div>
        </div>
      </div>
    )
  }
}
