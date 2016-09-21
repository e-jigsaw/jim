import {frr} from 'redux-frr'

export default frr('clearTimer', (state, action) => {
  const base = state.base + state.updateAt - state.startAt
  return {...state, timer: null, updateAt: null, startAt: null, base}
})
