const express = require('express')
,path = require('path')
,app = express();


app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/index'));

const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log('ready to go')
});