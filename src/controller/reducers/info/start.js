import {frr} from 'redux-frr'

export default frr('start', (state, action) => {
  return {...state, startAt: new Date().getTime()}
})
