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
          const {subs, info} = getState()
          dispatch({
            type: 'update',
            subs, info
          })
          setTimeout(update, 100)
        }
        update()
        break
      }
    }
  }
}
