import {frr} from 'redux-frr'

export default frr('seekTime', (state, action) => {
  return {...state, time: action.dest}
})
