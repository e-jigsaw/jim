import {prevHandler, nextHandler} from './slideHandler.js'

export default function keydown (event) {
  return async (dispatch, getState) => {
    const {socket} = getState()
    switch (event.keyCode) {
      case 37: {
        dispatch(prevHandler())
        break
      }
      case 39: {
        dispatch(nextHandler())
        break
      }
    }
  }
}
