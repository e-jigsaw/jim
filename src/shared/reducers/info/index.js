import {rr} from 'redux-frr'
import update from './update.js'
import clearTimer from './clearTimer.js'

export default rr(
  (state = {time: 0, timer: null, index: 1}) => state, update, clearTimer
)
