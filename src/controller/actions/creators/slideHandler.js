export function prevHandler () {
  return async (dispatch, getState) => {
    const {socket} = getState()
    socket.emit('prev')
    dispatch({
      type: 'prev'
    })
  }
}

export function nextHandler () {
  return async (dispatch, getState) => {
    const {socket} = getState()
    socket.emit('next')
    dispatch({
      type: 'next'
    })
  }
}
