import React from 'react'
import {connect} from 'react-redux'

function Slide ({slide}) {
  if (slide.data === undefined) {
    return pug`span`
  }
  const strs = slide.data[slide.index].map((str, i) => {
    const key = `sub-${slide.index}-${i}`
    return pug`
      div(
        key='{key}'
      ) {str}
    `
  }).reverse()
  const style = {
    position: 'absolute',
    width: '100%',
    color: '#fff',
    fontSize: '5em',
    writingMode: 'vertical-lr'
  }
  return pug`
    div(style='{style}') {strs}
  `
}

export default connect(
  ({slide}) => {
    return {slide}
  }
)(Slide)
