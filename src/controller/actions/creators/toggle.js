export default function toggle () {
  return async (dispatch, getState) => {
    const {socket} = getState()
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
      dispatch({
        type: 'start'
      })
      update()
    } else {
      clearTimeout(timer)
      dispatch({
        type: 'clearTimer'
      })
    }
  }
}
