import React from 'react'
import {connect} from 'react-redux'

function Sub ({subs}) {
  if (subs.data === undefined || !subs.isShow) {
    return pug`span`
  }
  const strs = subs.data[subs.index].strs.map((str, i) => {
    const key = `sub-${subs.index}-${i}`
    return pug`
      div(key='{key}') {str}
    `
  })
  const style = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: '3em'
  }
  return pug`
    div(style='{style}') {strs}
  `
}

export default connect(
  ({subs}) => {
    return {subs}
  }
)(Sub)
