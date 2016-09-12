export default function listenSocket () {
  return async (dispatch, getState) => {
    const {socket} = getState()
    socket.on('start', msg => {
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
    })
    socket.on('editTime', time => {
      dispatch({
        type: 'editTime',
        time
      })
    })
  }
}
