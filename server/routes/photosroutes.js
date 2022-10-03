const {Router} = require("express")

const router = Router()

router.get( "/", (req,res)=> res.send("welcome"))
router.post("/upload", (req,res)=> {
    console.log(req.files)
    res.send("file upload")
})
module.exports = router