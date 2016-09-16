import {frr} from 'redux-frr'

export default frr('update', (state, action) => {
  const updateAt = new Date().getTime()
  const diff = state.updateAt === null ? 100 : updateAt - state.updateAt
  return {
    ...state, time: state.time + diff, timer: action.timer, updateAt
  }
})
