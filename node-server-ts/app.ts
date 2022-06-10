import express from 'express'
import cors from 'cors'

const port = 8080
const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.get('/temp', async (req, res) => {
  const out: any[] = [
    'something',
  ]

  res.send(out)
})

app.listen(port, () => {
  console.log(`Server started:  http://localhost:${port}\n`)
})
