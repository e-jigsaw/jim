export default function keyboardHandler (event) {
  return async (dispatch, getState) => {
    console.log(event)
    const {socket} = getState()
    switch (event.keyCode) {
      case 83: {
        socket.emit('start')
        break
      }
    }
  }
}
