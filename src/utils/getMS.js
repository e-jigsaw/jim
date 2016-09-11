export default function (str) {
  const [t, m] = str.split(',')
  const [H, M, S] = t.split(':')
  return (parseInt(H) * 3600000) + (parseInt(M) * 60000) + (parseInt(S) * 1000) + parseInt(m)
}
