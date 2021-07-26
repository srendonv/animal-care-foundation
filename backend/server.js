let fs = require('fs');
let http = require('http');
let https = require('https');
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
let createError = require('http-errors');
let api = require('../src/config/env')
let env = api.appEnvironment;

// Express Routes
const studentRoute = require('../backend/routes/student.route')
const vetRoute = require ('../backend/routes/vet.route')
const customerRoute = require('../backend/routes/customer.route')
const datesRoute = require('../backend/routes/date.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();

//PORT
const portHttp = process.env.PORT || 4000;
const portHttps = process.env.PORT || 4040;

if(env === "production"){

// Certificate
const privateKey = fs.readFileSync('./cert/privkey.pem', 'utf8');
const certificate = fs.readFileSync('./cert/cert.pem', 'utf8');
const ca = fs.readFileSync('./cert/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(portHttp, () => {
	console.log('HTTP Server running on production on port '+ portHttp);
});

httpsServer.listen(portHttps, () => {
	console.log('HTTPS Server running on production on port '+ portHttps);
});

} else if(env === "development"){
const server = app.listen(portHttp, () => {
  console.log('Server runing on development on port ' + portHttp)
})
}

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute);
app.use('/vets', vetRoute);

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});