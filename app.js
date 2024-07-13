const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send(' i am a programmer')
})





app.listen(4545, () =>{
    console.log('hello listener');
})