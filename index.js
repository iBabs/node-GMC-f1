 require('./script')
 const fs = require('fs')
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

fs.readFile('./message.txt',(err,data)=>{
    try{console.log(data.toString())}
    catch(err){
        console.log(err)
    }
})

