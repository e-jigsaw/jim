import {frr} from 'redux-frr'

export default frr('bigload', (state, action) => {
  const subs = {1: []}
  let key = 1
  action.srt.split('\n').forEach(str => {
    if (str.length === 0) {
      key += 1
      subs[key] = []
    } else {
      subs[key].push(str)
    }
  })
  return {...state, data: subs}
})
