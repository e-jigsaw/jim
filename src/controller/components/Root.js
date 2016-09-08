import React, {Component} from 'react'
import {connect} from 'react-redux'
import load from '../../shared/actions/creators/load.js'

class Root extends Component {
  componentDidMount () {
    this.props.mounted()
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
      mounted: () => dispatch(load())
    }
  }
)(Root)
