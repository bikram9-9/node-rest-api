const express = require('express');
const http = require('http');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop')
const app = express(); // app here is also a valid RequestHandler that express returns
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));     

app.use('/admin',adminRoutes);   
app.use('/user',userRoutes);    

app.post('/',(req,res,next)=> {
    res.send('<h2> Express</h2>')
});

app.use((req,res, next )=> {
    res.status(404).send('<h2>Page Not found</h2>')
})
const server = http.createServer(app);
server.listen(3000);
