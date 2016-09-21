import {frr} from 'redux-frr'

export default frr('next', (state, action) => {
  return {...state, index: state.index + 1}
})
