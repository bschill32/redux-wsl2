import React from 'react'
import { connect } from 'react-redux'

import { updateCount } from '../redux/reducers/counter'

function CountDisplay(props) {
  return (
    <div>
      <h4>My job is to display the count on the app's state!</h4>
      <h1>{props.count}</h1>
      <input type="number" onBlur={ e => props.updateCount(e.target.value) }/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  }
}

export default connect(mapStateToProps, { updateCount })(CountDisplay)