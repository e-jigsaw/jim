import {frr} from 'redux-frr'

export default frr('start', (state, action) => {
  const startAt = new Date().getTime()
  return {
    ...state, time: state.base, startAt
  }
})
