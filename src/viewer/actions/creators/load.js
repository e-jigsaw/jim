export default function load () {
  return async (dispatch, getState) => {
    const res = await fetch('/target.srt')
    const srt = await res.text()
    dispatch({
      type: 'load',
      srt
    })
  }
}
