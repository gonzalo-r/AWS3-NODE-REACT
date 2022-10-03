const express = require("express")
const fileUpload = require("express-fileupload")
const photosRoutes = require("./routes/photosroutes")
const cors = require("cors")

const app = express()

//midlewares
app.use(cors())

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "./files"
}))

app.use(photosRoutes)


const port = 3000
app.listen(port)
console.log("server on port ", port)