import React from 'react'
import { connect } from 'react-redux'

import { showCart, removeFromCart, hideCart } from '../redux/reducers/ecommerce'
 
function Cart(props) {
  return (
    <div>
      { props.showingCart && <div style={{ background: 'white', position: 'fixed', top: 0, left:0, right: 0, bottom: 0}}>
        <button onClick={props.hideCart}>close</button>
        {props.cart.map(item => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.imageUrl} alt="" height="200"/>
              <button onClick={() => props.removeFromCart(item.id)}>remove from cart</button>
            </div>
          )
        })}
      </div> }

    </div>
  )
}

function mapStateToProps(state) {

  return {
    cart: state.ecommerce.cart,
    showingCart: state.ecommerce.showCart
  }
}

export default connect(mapStateToProps, { showCart, removeFromCart, hideCart })(Cart)