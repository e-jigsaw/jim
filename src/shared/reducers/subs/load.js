import {frr} from 'redux-frr'
import getMS from '../../../utils/getMS.js'

export default frr('load', (state, action) => {
  const subs = {}
  let key = null
  const splited = action.srt.split('\n').forEach(str => {
    if (str.length === 1) {
      key = null
      return
    }
    if (key === null) {
      key = parseInt(str)
    } else if (subs[key] === undefined) {
      subs[key] = {
        time: str.split(' --> ').map(getMS),
        strs: []
      }
    } else {
      subs[key].strs.push(str)
    }
  })
  return {...state, data: subs}
})
