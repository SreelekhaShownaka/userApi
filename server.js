const express=require('express');
const app=express();

const bodyParser =require('body-parser');
app.use(bodyParser.json());


require('./database');

app.use('/users',require('./src/controller/user-controller'));
app.use('/messages',require('./src/controller/message-controller'));

app.listen(3002,()=>{
    console.log('Server started on port 3002');
})
