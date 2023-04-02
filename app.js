const express = require('express');
const router = require('./src/route/api');
const app = new express();
const bodyParser = require('body-parser');

// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database
const mongoose = require('mongoose');
app.use(express.static('client/build'));
// Security Middleware Implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
// body parser
app.use(bodyParser.json());
// Rate Limiter
const limiter = rateLimit({windowMs:15*60*100,max:3000});
app.use(limiter);
// Database Connection
const URI ='mongodb://127.0.0.1:27017/Crud';
mongoose.connect(URI)
    .then(()=>console.log('Database Connected'))
    .catch((err)=>console.log(err));
// Router
app.use('/api/v1', router);

// Add React Front end routing
app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
});
module.exports=app;