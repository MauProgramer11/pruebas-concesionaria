import express from 'express';
import { engine } from 'express-handlebars'
import viewRouter from './routes/views.route.js'

const app = express()

//configuracion del motor de plantillas
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

const PORT = 3000

app.use('/', viewRouter)


app.listen(PORT, () => console.log('Listen to port http://localhost:3000'))