export default function socketInit () {
  return {
    type: 'socketInited',
    socket: io()
  }
}
