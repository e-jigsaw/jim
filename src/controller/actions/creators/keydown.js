export default function keyboardHandler (event) {
  return async (dispatch, getState) => {
    console.log(event)
    const {socket} = getState()
    switch (event.keyCode) {
      case 83: {
        socket.emit('start')
        dispatch({
          type: 'start'
        })
        const update = () => {
          const {subs} = getState()
          dispatch({
            type: 'update',
            subs
          })
          setTimeout(update, 100)
        }
        setTimeout(update, 100)
        break
      }
    }
  }
}
