export default function convertMS (n) {
  const d = new Date(n)
  return `${d.getHours() - 9}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`
}
