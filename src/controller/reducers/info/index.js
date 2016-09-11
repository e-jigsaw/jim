import {rr} from 'redux-frr'
import start from './start.js'
import update from './update.js'

export default rr(
  (state = {startAt: 0, updateAt: 0, index: 1}) => state, start, update
)
