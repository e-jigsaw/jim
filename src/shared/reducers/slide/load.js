import {frr} from 'redux-frr'

function split (srts) {
  const subs = {1: []}
  let key = 1
  srts.split('\n').forEach(str => {
    if (str.length === 0) {
      key += 1
      subs[key] = []
    } else {
      subs[key].push(str)
    }
  })
  return subs
}

export default frr('bigload', (state, action) => {
  const subs = split(action.srt)
  const subs1 = split(action.en)
  return {...state, data: subs, data1: subs1}
})
