import React, { Component } from 'react';
import Form from './components/Form';
import img from './cryptomonedas.png';
import axios from 'axios';
import Result from './components/Result';
import Spinner from './components/Spinner';

export default class App extends Component {

  state = {
    result: {},
    coinSelected: '',
    cryptoSelected: '',
    loading: false
  }

  quoteCrypto = async (quote) => {
    const { coin, cryptocurrency } = quote;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`;
    
    await axios.get(url)
                .then(resp => {
                  this.setState({
                    result: resp.data.DISPLAY[cryptocurrency][coin],
                    loading: true
                  }, () => {
                    setTimeout(() => {
                      this.setState({
                        loading: false
                      })
                    }, 3000);
                  });
                });
  }

  render() {

    const result = (this.state.loading) ? <Spinner/> :  <Result result={ this.state.result }/>;

    return (
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src={ img } alt="crypto" className="logotipo"/>
          </div>
          <div className="one-half column">
            <h1>Quotes Cryptocurrencies Instantly</h1>
            <Form
              quoteCrypto={ this.quoteCrypto }
            />
            { result }            
          </div>
        </div>
      </div>
    )
  }
}
