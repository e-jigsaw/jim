import React, {Component} from 'react'
import {connect} from 'react-redux'
import load from '../../shared/actions/creators/load.js'
import socketInit from '../../shared/actions/socketInit.js'
import keydown from '../actions/creators/keydown.js'

class Root extends Component {
  componentDidMount () {
    this.props.mounted()
    document.addEventListener('keydown', this.props.keydown)
  }

  render () {
    return pug`
      div yo
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
      },
      keydown: event => dispatch(keydown(event))
    }
  }
)(Root)
