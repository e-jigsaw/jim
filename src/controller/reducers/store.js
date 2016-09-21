import {combineReducers} from 'redux'
import subs from '../../shared/reducers/subs/index.js'
import socket from '../../shared/reducers/socket/index.js'
import info from '../../shared/reducers/info/index.js'
import slide from '../../shared/reducers/slide/index.js'

export default combineReducers({
  subs, socket, info, slide
})
