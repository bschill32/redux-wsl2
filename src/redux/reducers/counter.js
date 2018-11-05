const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const UPDATE = 'UPDATE'

const initialState = {
  count: 900
}


function reducer(state = initialState, action) {
  
  switch (action.type) {
    case INCREASE:
      return Object.assign({}, state, { count: state.count + 1 })
    case DECREASE:
      return Object.assign({}, state, { count: state.count - 1 })
    case UPDATE:
      return Object.assign({}, state, { count: +action.payload })
    default:
      return state;
  }
}

export default reducer

// action creators

export function increaseCount() {
  return {
    type: INCREASE
  }
}

export function decreaseCount() {
  return {
    type: DECREASE
  }
}

export function updateCount(num) {
  return {
    type: UPDATE,
    payload: num
  }
}
