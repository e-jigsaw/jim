import {rr} from 'redux-frr'
import update from './update.js'
import clearTimer from './clearTimer.js'
import seekTime from './seekTime.js'
import slide from './slide.js'
import start from './start.js'

export default rr(
  (state = {
    base: 0, startAt: null, time: 0, timer: null, index: 1,
    updateAt: null, mode: 'srt'
  }) => state,
  update, clearTimer, seekTime, slide, start
)
