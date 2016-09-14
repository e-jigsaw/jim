export default function keyboardHandler (event) {
  return async (dispatch, getState) => {
    const {socket} = getState()
    switch (event.keyCode) {
      case 83: {
        socket.emit('toggle')
        const {timer} = getState().info
        if (timer === null) {
          const update = () => {
            const {subs, info} = getState()
            const t = setTimeout(update, 100)
            dispatch({
              type: 'update',
              subs, info, timer: t
            })
          }
          update()
        } else {
          clearTimeout(timer)
          dispatch({
            type: 'clearTimer'
          })
        }
        break
      }
    }
  }
}
