import {frr} from 'redux-frr'

export default frr('editTime', (state, action) => {
  Object.keys(state.data).forEach(key => {
    state.data[key].time = state.data[key].time.map(n => n + action.time)
  })
  return {...state}
})
