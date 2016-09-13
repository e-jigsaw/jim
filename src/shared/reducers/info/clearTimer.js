import {frr} from 'redux-frr'

export default frr('clearTimer', (state, action) => {
  return {...state, timer: null}
})
