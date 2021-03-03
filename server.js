const express = require ('express') 
const path = require("path")
const app = express()
const port = process.env.PORT || 5000

const staticDir = process.env.Dev ?  './client/public' : "./client/build" 

app.use(express.static(path.resolve(staticDir))) 

app.get("/users", (req, res) => {
    res.sendFile(path.resolve("./users.json"))
})

app.get('*', (req, res) =>{
    res.sendFile(path.resolve("./client/build/index.html"))
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
