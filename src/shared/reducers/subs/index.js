import {rr} from 'redux-frr'
import load from './load.js'
import show from './show.js'
import hide from './hide.js'
import editTime from './editTime.js'
import update from './update.js'

export default rr(
  (state = {index: 1, isShow: false}) => state,
  load, show, hide, editTime, update
)
