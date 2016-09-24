import React from 'react'
import {connect} from 'react-redux'
import Switch from './Switch.js'
import {nextHandler, prevHandler} from '../actions/creators/slideHandler.js'

function getSub (ary) {
  return ary.length === 0 ? ['■'] : ary
}

function Slide ({info, slide, next, prev}) {
  if (slide.data === undefined) {
    return pug`span`
  }
  let {index} = slide
  const n = parseInt(index)
  const p1 = n - 1 < 0 ? 0 : n - 1
  const p2 = n - 11 < 0 ? 0 : n - 11
  const previosly = Object.keys(slide.data).slice(p2, p1).map(key => {
    const sub = getSub(slide.data[key])
    const k = `prev-${key}`
    return pug`
      tr(key='{k}')
        td {sub}
    `
  })
  const recently = Object.keys(slide.data).slice((n + 1), (n + 11)).map(key => {
    const sub = getSub(slide.data[key])
    const k = `recent-${key}`
    return pug`
      tr(key='{k}')
        td {sub}
    `
  })
  const previosly1 = Object.keys(slide.data1).slice(p2, p1).map(key => {
    const sub = getSub(slide.data1[key])
    const k = `prev1-${key}`
    return pug`
      tr(key='{k}')
        td {sub}
    `
  })
  const recently1 = Object.keys(slide.data1).slice((n + 1), (n + 11)).map(key => {
    const sub = getSub(slide.data1[key])
    const k = `recent1-${key}`
    return pug`
      tr(key='{k}')
        td {sub}
    `
  })
  const s1 = {
    color: '#f00',
    fontWeight: 'bold'
  }
  const s2 = {
    color: '#00f'
  }
  const root = {
    display: 'flex',
    flexDirection: 'colmun'
  }
  const child = {
    width: '50%'
  }
  return pug`
    div(style='{root}')
      div(style='{child}')
        table
          tbody {previosly}
        div(style='{s1}')
          span {getSub(slide.data[n])}
        div(style='{s2}')
          span {getSub(slide.data[n + 1])}
        table
          tbody {recently}
        div
          button(onClick='{prev}') 前へ
          button(onClick='{next}') 次へ
        Switch
      div(style='{child}')
        table
          tbody {previosly1}
        div(style='{s1}')
          span {slide.data1[n]}
        div(style='{s2}')
          span {slide.data1[n + 1]}
        table
          tbody {recently1}
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
