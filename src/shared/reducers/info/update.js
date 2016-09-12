import {frr} from 'redux-frr'

export default frr('update', (state, action) => {
  state.updateAt = new Date().getTime()
  const diff = state.updateAt - state.startAt
  if (action.subs.data[state.index].time[0] - diff < 0) {
    state.index += 1
  }
  return {...state}
})
