import {frr} from 'redux-frr'

export default frr('hide', (state, action) => {
  return {...state, isShow: false, index: state.index + 1}
})
