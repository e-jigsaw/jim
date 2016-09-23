export default function seekNext () {
  return (dispatch, getState) => {
    const {socket, subs, info} = getState()
    if (info.startAt === null) {
      const index = subs.isShow ? subs.index + 1 : subs.index
      const dest = subs.data[index].time[0] + 10
      socket.emit('seekTime', dest)
      dispatch({
        type: 'seekTime',
        dest
      })
    }
  }
}
