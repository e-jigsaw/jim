export default function editTime (time) {
  return (dispatch, getState) => {
    const {socket} = getState()
    socket.emit('editTime', time)
    dispatch({
      type: 'editTime',
      time
    })
  }
}
