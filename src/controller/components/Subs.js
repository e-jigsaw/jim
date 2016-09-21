import React from 'react'
import {connect} from 'react-redux'
import Buttons from './Buttons.js'
import Switch from './Switch.js'
import convertMS from '../../utils/convertMS.js'

function Subs ({info, subs}) {
  if (subs.data === undefined) {
    return pug`span`
  }
  let {index} = subs
  let nextTime = subs.data[index].time[0] - info.time
  let nextIndex = index
  let currentElement
  if (nextTime < 0) {
    nextIndex += 1
    nextTime = subs.data[nextIndex].time[0] - info.time
    currentElement = pug`
      div
        span 今の字幕あと:&nbsp;
        span {convertMS(subs.data[index].time[1] - info.time)}
    `
  } else {
    currentElement = pug`span`
  }
  const n = parseInt(index)
  const recently = Object.keys(subs.data).slice((n), (n + 20)).map(key => {
    const sub = subs.data[key]
    const k = `recent-${key}`
    return pug`
      tr(key='{k}')
        td {convertMS(sub.time[0])}
        td &nbsp;--&gt;&nbsp;
        td {convertMS(sub.time[1])}
        td {sub.strs}
    `
  })
  return pug`
    div
      div {convertMS(info.time)}
      div
        span 次の字幕:&nbsp;
        span {subs.data[nextIndex].strs}
      div
        span あと:&nbsp;
        span {convertMS(nextTime)}
      Buttons
      div {currentElement}
      table
        tbody {recently}
      Switch
  `
}

export default connect(
  ({info, subs}) => {
    return {info, subs}
  }
)(Subs)
