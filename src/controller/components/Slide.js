import React from 'react'
import {connect} from 'react-redux'
import Switch from './Switch.js'
import {nextHandler, prevHandler} from '../actions/creators/slideHandler.js'

function Slide ({info, slide, next, prev}) {
  if (slide.data === undefined) {
    return pug`span`
  }
  let {index} = slide
  const n = parseInt(index)
  const recently = Object.keys(slide.data).slice((n + 1), (n + 21)).map(key => {
    const sub = slide.data[key]
    const k = `recent-${key}`
    return pug`
      tr(key='{k}')
        td {sub}
    `
  })
  return pug`
    div
      div
        span 今の字幕:&nbsp;
        span {slide.data[n]}
      div
        button(onClick='{prev}') 前へ
        button(onClick='{next}') 次へ
      div
        span 次の字幕:&nbsp;
        span {slide.data[n + 1]}
      table
        tbody {recently}
      Switch
  `
}

export default connect(
  ({info, slide}) => {
    return {info, slide}
  },
  dispatch => {
    return {
      next: () => dispatch(nextHandler()),
      prev: () => dispatch(prevHandler())
    }
  }
)(Slide)
