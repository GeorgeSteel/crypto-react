import React, { Component } from 'react';
import axios from 'axios';
import Crypto from './Crypto';
import Error from './Error';

export default class Form extends Component {

    state = {
        crypto: [],
        coin: '',
        cryptocurrency: '',
        error: false
    }

    async componentWillMount() {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        await axios.get(url)
                    .then(resp => {
                        this.setState({
                            crypto: resp.data.Data
                        });
                    })
                    .catch(err => console.error(err));
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    quoteCoin = e => {
        e.preventDefault();

        const { coin, cryptocurrency } = this.state;

        if (coin === '' || cryptocurrency === '') {
            this.setState({
                error: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        error: false
                    });
                }, 3000);
            });
        }

        const quote = {
            coin,
            cryptocurrency
        }

        this.props.quoteCrypto(quote);
    }

    render() {

        const msg = (this.state.error) ? <Error msg="Both fields are required" /> : null;

        return (
            <form onSubmit={ this.quoteCoin }>
                { msg }
                <div className="row">
                    <label>Elige tu Moneda</label>
                    <select 
                        onChange={ this.handleChange }
                        name="coin"
                        className="u-full-width">
                            <option value="">Elige tu moneda</option>
                            <option value="USD">Dolar Estadounidense</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="GBP">Libras</option>
                            <option value="EUR">Euros</option>
                    </select>
                </div>
            
                <div className="row">
                    <div>
                        <label>Elige tu Criptomoneda</label>
                        <select 
                            onChange={ this.handleChange }
                            name="cryptocurrency" 
                            className="u-full-width">
                            <option defaultValue>Elige tu moneda</option>
                            { Object.keys(this.state.crypto).map(key => (
                                <Crypto 
                                    key={ key }
                                    crypto={ this.state.crypto[key] }
                                />
                            )) }
                        </select>
                    </div>
                </div>
                <input className="button-primary u-full-width" type="submit" value="Cotizar" />
            </form>
        )
    }
}
