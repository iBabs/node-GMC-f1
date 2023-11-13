require('./script')
const fs = require('fs')
const express = require('express')

const app = express()
const PORT = 8000
//inbuilt
//local
//third party 
const message = '\nWe have made it and this is not the end'

// fs.writeFile('./message1.txt', message,(err)=>{
//     if(err) throw err

// })

// fs.appendFile('./message.txt', message,(err)=>{
//     if(err) throw err
//     console.log('Updated')
// })

// fs.unlink('./message1.txt',(err)=>{
//     if(err) throw err
//     console.log('file deleted')

// })

fs.readFile('./message.txt', (err, data) => {
    try { console.log(data.toString()) }
    catch (err) {
        console.log(err)
    }
})

// require('./server')

//using express app
app.get('/',(req, res)=>{
    res.send('This is a new beggining')
    console.log('app works fine')
})
app.get('/dimention',(req, res)=>{
    res.send('This is a another dimention')
    console.log('app works fine')
})
app.listen(8000)