import React from 'react'
import {connect} from 'react-redux'
import editTime from '../actions/creators/editTime.js'

function Buttons ({onClick}) {
  return pug`
    div
      button(onClick='{onClick(1000)}') 1秒遅く
      button(onClick='{onClick(100)}') 0.1秒遅く
      button(onClick='{onClick(-100)}') 0.1秒早く
      button(onClick='{onClick(-1000)}') 1秒早く
  `
}

export default connect(
  state => {
    return {}
  },
  dispatch => {
    return {
      onClick: time => event => dispatch(editTime(time))
    }
  }
)(Buttons)
