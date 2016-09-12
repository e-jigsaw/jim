import {rr} from 'redux-frr'
import update from './update.js'

export default rr(
  (state = {time: 0, index: 1}) => state, update
)
