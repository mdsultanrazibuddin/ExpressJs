const { error } = require('console');
const express = require ('express');
const fs = require('fs')

const app = express();


app.get('/', (req, res) => {
    fs.readFile('./pages/index.html', (err, data) =>{
        if(err) {
            console.log('Error', err);
            res.send(' <h2>something is wrong</h2> ')
        }
        else{
            res.write(data)
            res.end
        }
    })
})
app.get('/home', (req, res) => {
    res.send('i am programer')
})
app.get('/about', (req, res) => {
    res.send('i am pro')
})







app. listen(5252, ( ) => {
    console.log('hi listener');
})