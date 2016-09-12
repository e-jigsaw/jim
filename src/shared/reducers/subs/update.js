import {frr} from 'redux-frr'

export default frr('update', (state, action) => {
  const {info} = action
  if (info.time > state.data[state.index].time[0]) {
    state.isShow = true
  }
  if (info.time > state.data[state.index].time[1]) {
    state.isShow = false
    state.index += 1
  }
  return {...state}
})
