import * as Koa from 'koa'
import * as cors from '@koa/cors'
import * as morgan from 'koa-morgan'

const app:Koa = new Koa()

if (app.env === 'development') {
  app.use(morgan('dev'))
}
app.use(cors())

// handle favicon request
app.use(async (ctx, next) => {
  if (ctx.url === '/favicon.ico') {
    ctx.status = 200
  } else {
    next()
  }
})

app.use(async ctx => {
  ctx.body = 'service: ok'
  ctx.status = 200
})

export default app
