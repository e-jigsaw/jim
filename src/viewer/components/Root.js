import React, {Component} from 'react'
import {connect} from 'react-redux'
import load from '../../shared/actions/creators/load.js'

class Root extends Component {
  componentDidMount () {
    this.props.mounted()
  }

  render () {
    const {innerWidth, innerHeight} = window
    const style = {
      width: innerWidth,
      height: innerHeight,
      backgroundColor: '#000'
    }
    return pug`
      div(style='{style}')
    `
  }
}

export default connect(
  state => {
    return {}
  },
  dispatch => {
    return {
      mounted: () => dispatch(load())
    }
  }
)(Root)
