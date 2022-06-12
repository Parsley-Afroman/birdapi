import express from 'express';
const cors = require('cors')
import http from 'http';

const routes = require('../routes/routes')

const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true}))
routes(app)
const server = new http.Server(app);
server.listen(8080);