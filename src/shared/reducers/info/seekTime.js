import {frr} from 'redux-frr'

export default frr('seekTime', (state, action) => {
  const {dest} = action
  return {...state, base: dest, time: dest, updateAt: null, startAt: null}
})
