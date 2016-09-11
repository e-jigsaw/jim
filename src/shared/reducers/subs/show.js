import {frr} from 'redux-frr'

export default frr('show', (state, action) => {
  return {...state, isShow: true}
})
