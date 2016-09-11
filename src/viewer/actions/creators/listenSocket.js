export default function listenSocket () {
  return async (dispatch, getState) => {
    const {socket} = getState()
    socket.on('start', msg => {
      dispatch({
        type: 'start'
      })
      let {subs} = getState()
      const handler = (type, index) => () => {
        subs = getState().subs
        setTimeout(
          handler(type, index),
          subs.data[subs.index + 1].time[index] - subs.data[subs.index].time[index]
        )
        dispatch({type})
      }
      setTimeout(handler('show', 0), subs.data[subs.index].time[0])
      setTimeout(handler('hide', 1), subs.data[subs.index].time[1])
    })
  }
}
