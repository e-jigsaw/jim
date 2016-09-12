import {rr} from 'redux-frr'
import load from './load.js'
import editTime from './editTime.js'
import update from './update.js'

export default rr(
  (state = {index: 1, isShow: false}) => state,
  load, editTime, update
)
