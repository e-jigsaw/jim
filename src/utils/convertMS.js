export default function convertMS (n) {
  const d = new Date(n)
  const comp = (n) => n.toString().length === 1 ? `0${n}` : n
  return `${comp(d.getHours() - 9)}:${comp(d.getMinutes())}:${comp(d.getSeconds())}:${comp(d.getMilliseconds())}`
}
