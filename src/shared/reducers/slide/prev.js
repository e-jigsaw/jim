import {frr} from 'redux-frr'

export default frr('prev', (state, action) => {
  return {...state, index: state.index - 1}
})
