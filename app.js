const express = require('express');
const bodyParser = require('body-parser');
const path  = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));  //used to parse request body from parser

app.use('/admin',adminRoutes);  // only routes with /admin initial path e.g. /admin/add-product 
app.use(shopRoutes);

app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
