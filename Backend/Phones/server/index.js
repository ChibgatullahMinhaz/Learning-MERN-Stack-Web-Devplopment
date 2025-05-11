import express from 'express';
import cors from 'cors';
const phones = require('./phones.json');
const app= express();
const port = process.env.port || 5000;
// use middleware
app.use(cors());
app.use(express.json());


// routes 
app.get('/', (req,res )=> {
    res.send('hello world');
})

app.get('/phones', (req,res)=> {
    res.send(phones)
})

app.get('/phones/:id', (req, res)=> {
    const id = parseInt( req.params.id);
    const phone = phones.find(phone => phone.id === id);
    res.send(phone)
})

app.post('/phones', (req, res)=> {
    const newPhone = req.body;
    phones.push(newPhone);
    res.send(newPhone);
})  

// listening
app.listen(port, (req, res)=>{
    console.log(`phones server start with http://localhost:${port}`)
})