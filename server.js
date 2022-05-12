const express = require('express');
const app = express();
app.use(express.json())
require('./router/rotas')(app)








app.listen(8000, function(){
  console.log('Olá Mundo, http://localhost:8000')
;})
