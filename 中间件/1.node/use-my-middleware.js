var express= require('express');
var app=express();

const um = require('./my-middleware');
app.use(um({option1:'1',option2:'2'}));