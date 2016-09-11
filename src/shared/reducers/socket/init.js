import {frr} from 'redux-frr'

export default frr('socketInited', (state, action) => {
  return action.socket
})
