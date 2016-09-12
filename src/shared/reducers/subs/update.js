import {frr} from 'redux-frr'

export default frr('update', (state, action) => {
  const {info} = action
  const diff = info.updateAt - info.startAt
  if (diff > state.data[state.index].time[0]) {
    state.isShow = true
  }
  if (diff > state.data[state.index].time[1]) {
    state.isShow = false
    state.index += 1
  }
  return {...state}
})
