export default function listenSocket () {
  return async (dispatch, getState) => {
    const {socket} = getState()
    socket.on('toggle', msg => {
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
    })
    socket.on('editTime', time => {
      dispatch({
        type: 'editTime',
        time
      })
    })
  }
}
