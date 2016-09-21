import React, {Component} from 'react'
import {connect} from 'react-redux'
import Sub from './Sub.js'
import Slide from './Slide.js'
import load from '../../shared/actions/creators/load.js'
import socketInit from '../../shared/actions/socketInit.js'
import listenSocket from '../actions/creators/listenSocket.js'

class Root extends Component {
  componentDidMount () {
    this.props.mounted()
  }

  render () {
    const {innerWidth, innerHeight} = window
    const style = {
      width: innerWidth,
      height: innerHeight,
      backgroundColor: '#000',
      position: 'relative'
    }
    const sub = this.props.info.mode === 'slide' ? pug`Slide` : pug`Sub`
    return pug`
      div(style='{style}') {sub}
    `
  }
}

export default connect(
  ({info}) => {
    return {info}
  },
  dispatch => {
    return {
      mounted: () => {
        dispatch(load())
        dispatch(socketInit())
        dispatch(listenSocket())
      }
    }
  }
)(Root)
