import {frr} from 'redux-frr'

export default frr('seekTime', (state, action) => {
  let index = 1
  while (1) {
    if (action.dest > state.data[index].time[1]) {
      index += 1
    } else if (action.dest > state.data[index].time[0]) {
      state.isShow = true
      state.index = index
      break
    } else {
      state.isShow = false
      state.index = index
      break
    }
  }
  return {...state}
})
