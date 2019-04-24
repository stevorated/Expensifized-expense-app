const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname,'..', 'public' )
const port = process.env.PORT || 3000
app.use(express.static(publicPath))

app.get('*', (req,res)=>{
    res.sendFile(publicPath, 'index.html')
})

app.listen(port, ()=> {
    console.log(`server is up on port ${port}`)
})