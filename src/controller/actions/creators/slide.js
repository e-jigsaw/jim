export default function slide () {
  return async (dispatch, getState) => {
    const {socket} = getState()
    socket.emit('slide')
    dispatch({
      type: 'slide'
    })
  }
}
