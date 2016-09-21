import React from 'react'
import {connect} from 'react-redux'
import toggleAction from '../actions/creators/toggle.js'
import slideAction from '../actions/creators/slide.js'

function Switch ({toggle, slide}) {
  return pug`
    div
      button(onClick='{toggle}') スタート/ストップ
      button(onClick='{slide}') スライド/ srt
  `
}

export default connect(
  state => {
    return {}
  },
  dispatch => {
    return {
      toggle: event => dispatch(toggleAction()),
      slide: event => dispatch(slideAction())
    }
  }
)(Switch)
