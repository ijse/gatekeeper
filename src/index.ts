import app from './app'

const port:number = ~~process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Start on port ${port}`)
})
