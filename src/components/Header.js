import React from 'react'
import { connect } from 'react-redux'

import { showCart, removeFromCart } from '../redux/reducers/ecommerce'
 
function Header(props) {
  return (
    <div style={{border: '1px solid red', display: 'flex', justifyContent: 'space-between', padding: 20}}>
      <h1>STORE</h1>
      <div onClick={props.showCart}>
        <h1>CART [{props.cartLength}]</h1>
      </div>
    </div>
  )
}

function mapStateToProps(state) {

  return {
    cart: state.ecommerce.cart,
    cartLength: state.ecommerce.cart.length,
    showingCart: state.ecommerce.showCart
  }
}

export default connect(mapStateToProps, { showCart, removeFromCart })(Header)