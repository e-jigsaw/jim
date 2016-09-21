import {frr} from 'redux-frr'

export default frr('slide', (state, action) => {
  const mode = state.mode === 'srt' ? 'slide' : 'srt'
  return {...state, mode}
})
