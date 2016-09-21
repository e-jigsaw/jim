import {frr} from 'redux-frr'

export default frr('update', (state, action) => {
  const updateAt = new Date().getTime()
  const diff = updateAt - state.startAt
  return {
    ...state, time: state.base + diff, timer: action.timer, updateAt
  }
})
