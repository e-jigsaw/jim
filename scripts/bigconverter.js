const {readFileSync, writeFileSync} = require('fs')

const times = readFileSync('./assets/what_time.txt').toString().split('\n')
const texts = readFileSync('./assets/what_text.utf8.txt').toString().split('\n')

const comp = n => {
  return n.toString().length === 1 ? `0${n}` : n
}

const comp1 = n => {
  return n.toString().length !== 3 ? comp1(`0${n}`) : n
}

const ms2tc = ms => {
  const d = new Date(ms)
  const H = comp(d.getHours() - 9)
  const M = comp(d.getMinutes())
  const s = comp(d.getSeconds())
  const m = comp1(d.getMilliseconds())
  return `${H}:${M}:${s}:${m}`
}

const nf = ns => ns !== null

const srTimes = times.map((n, i) => {
  return i % 2 === 0 ? [parseInt(times[i]) * 100, parseInt(times[i + 1]) * 100] : null
}).filter(nf).map((ns, i) => {
  return `${i + 1}\n${ms2tc(ns[0])} --> ${ms2tc(ns[1])}`
})

const srTexts = texts.map((s, i) => {
  return i % 4 === 0 ? [texts[i], texts[i + 1], texts[i + 2], texts[i + 3]] : null
}).filter(nf).map(ss => {
  return ss.filter(s => s !== '').join('\n')
})

const srt = srTimes.map((t, i) => {
  return `${t}\n${srTexts[i]}\n`
}).join('\n')

writeFileSync('./assets/what_converted.srt', srt)
