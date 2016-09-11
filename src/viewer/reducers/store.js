import {combineReducers} from 'redux'
import subs from '../../shared/reducers/subs/index.js'
import socket from '../../shared/reducers/socket/index.js'

export default combineReducers({
  subs, socket
})
