import React, {Component} from 'react'
import {connect} from 'react-redux'
import Buttons from './Buttons.js'
import load from '../../shared/actions/creators/load.js'
import socketInit from '../../shared/actions/socketInit.js'
import keydown from '../actions/creators/keydown.js'
import convertMS from '../../utils/convertMS.js'

class Root extends Component {
  componentDidMount () {
    this.props.mounted()
    document.addEventListener('keydown', this.props.keydown)
  }

  render () {
    const {info, subs} = this.props
    if (subs.data === undefined) {
      return pug`span`
    }
    let {index} = subs
    let next = subs.data[index].time[0] - info.time
    if (next < 0) {
      index += 1
      next = subs.data[index].time[0] - info.time
    }
    return pug`
      div
        div {convertMS(info.time)}
        div
          span 次の字幕:&nbsp;
          span {subs.data[index].strs}
        div
          span あと:&nbsp;
          span {convertMS(next)}
        Buttons
    `
  }
}

export default connect(
  ({info, subs}) => {
    return {info, subs}
  },
  dispatch => {
    return {
      mounted: () => {
        dispatch(load())
        dispatch(socketInit())
      },
      keydown: event => dispatch(keydown(event))
    }
  }
)(Root)
