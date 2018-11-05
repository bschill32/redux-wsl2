import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { increaseCount, decreaseCount } from './redux/reducers/counter'
import { addToCart } from './redux/reducers/ecommerce'

import CountDisplay from './components/CountDisplay'
import Header from './components/Header'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.count}
        <button onClick={this.props.increaseCount}>+</button>
        <button onClick={this.props.decreaseCount}>-</button>
        <CountDisplay />
        <Cart />
        {this.props.products.map(item => {
          return (
            <div style={{ border: '1px solid black'}} key={item.id}>
              <img src={item.imageUrl} alt="" height='200'/>
              <button onClick={() => this.props.addToCart(item)}>add to cart</button>
            </div>
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    products: state.ecommerce.products
  }
}

let decorator = connect(mapStateToProps, { increaseCount, decreaseCount, addToCart })
export default decorator(App);
