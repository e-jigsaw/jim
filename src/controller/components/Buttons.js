import React, {Component} from 'react'
import {connect} from 'react-redux'
import editTime from '../actions/creators/editTime.js'
import seekTime from '../actions/creators/seekTime.js'

class Buttons extends Component {
  seek () {
    const {hour, min, sec} = this.refs
    this.props.seek({hour: hour.value, min: min.value, sec: sec.value})
  }

  render () {
    const {onClick} = this.props
    return pug`
      div
        div
          button(onClick='{onClick(1000)}') 1秒遅く
          button(onClick='{onClick(100)}') 0.1秒遅く
          button(onClick='{onClick(-100)}') 0.1秒早く
          button(onClick='{onClick(-1000)}') 1秒早く
        div
          input(size='2' ref='hour')
          span :
          input(size='2' ref='min')
          span :
          input(size='2' ref='sec')
          button(onClick='{this.seek.bind(this)}') シーク
    `
  }
}

export default connect(
  state => {
    return {}
  },
  dispatch => {
    return {
      onClick: time => event => dispatch(editTime(time)),
      seek: time => dispatch(seekTime(time))
    }
  }
)(Buttons)
