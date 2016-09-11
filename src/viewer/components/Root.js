import React, {Component} from 'react'
import {connect} from 'react-redux'
import Sub from './Sub.js'
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
    return pug`
      div(style='{style}')
        Sub
    `
  }
}

export default connect(
  state => {
    return {}
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
