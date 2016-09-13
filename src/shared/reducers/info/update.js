import {frr} from 'redux-frr'

export default frr('update', (state, action) => {
  return {...state, time: state.time + 100, timer: action.timer}
})
