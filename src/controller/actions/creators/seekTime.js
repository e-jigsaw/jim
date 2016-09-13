import getMS from '../../../utils/getMS.js'

export default function seekTime ({hour, min, sec}) {
  return (dispatch, getState) => {
    const {socket} = getState()
    const dest = getMS(`${hour}:${min}:${sec},0`)
    socket.emit('seekTime', dest)
    dispatch({
      type: 'seekTime',
      dest
    })
  }
}
