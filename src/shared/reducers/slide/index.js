import {rr} from 'redux-frr'
import load from './load.js'
import next from './next.js'
import prev from './prev.js'

export default rr(
  (state = {index: 1, isShow: false}) => state, load, next, prev
)
