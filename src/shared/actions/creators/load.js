export default function load () {
  return async (dispatch, getState) => {
    const qs = window.location.search
    const isBig = qs === '?big'
    const res = await fetch('/assets/target.srt')
    const srt = await res.text()
    dispatch({
      type: 'load',
      srt
    })
    if (isBig) {
      const res1 = await fetch('/assets/target.txt')
      const srt1 = await res1.text()
      const res2 = await fetch('/assets/target_en.txt')
      const srt2 = await res2.text()
      dispatch({
        type: 'bigload',
        srt: srt1,
        en: srt2
      })
    }
  }
}
