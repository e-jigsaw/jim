import {rr} from 'redux-frr'
import update from './update.js'
import clearTimer from './clearTimer.js'
import seekTime from './seekTime.js'
import slide from './slide.js'

export default rr(
  (state = {time: 0, timer: null, index: 1, updateAt: null, mode: 'srt'}) => state,
  update, clearTimer, seekTime, slide
)
