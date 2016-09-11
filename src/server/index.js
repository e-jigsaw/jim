import 'babel-polyfill'
import Koa from 'koa'
import Router from 'koa-router'
import send from 'koa-send'
import Socket from 'koa-socket'
import {resolve} from 'path'

const app = new Koa()
const router = new Router()
const socket = new Socket()

router
  .get('/', ctx => {
    ctx.body = 'works'
  })
  .get('/assets/socket.io.js', async ctx => {
    await send(ctx, 'socket.io.js', {
      root: resolve(__dirname, '../../node_modules/socket.io-client')
    })
  })
  .get('/assets/target.srt', async ctx => {
    await send(ctx, 'target.srt', {
      root: resolve(__dirname, '../../build')
    })
  })
  .get('/controller/:filename', async ctx => {
    await send(ctx, ctx.params.filename, {
      root: resolve(__dirname, '../../build/controller')
    })
  })
  .get('/viewer/:filename', async ctx => {
    await send(ctx, ctx.params.filename, {
      root: resolve(__dirname, '../../build/viewer')
    })
  })

app
  .use(router.routes())
  .use(router.allowedMethods())

socket.attach(app)
socket.on('msg', (ctx, data) => {
  socket.broadcast('msg', data)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`)
})
