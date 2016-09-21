import React, {Component} from 'react'
import {connect} from 'react-redux'
import Subs from './Subs.js'
import Slide from './Slide.js'
import load from '../../shared/actions/creators/load.js'
import socketInit from '../../shared/actions/socketInit.js'
import convertMS from '../../utils/convertMS.js'

class Root extends Component {
  componentDidMount () {
    this.props.mounted()
  }

  render () {
    const {info} = this.props
    if (info.mode === 'slide') {
      return pug`Slide`
    } else {
      return pug`Subs`
    }
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
      }
    }
  }
)(Root)
