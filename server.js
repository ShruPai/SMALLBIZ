const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://Shru_pai:shrushrethi@clustermain.wxhuq.mongodb.net/notesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("successful conection")
}).catch((err) => console.log(err))

const notesSchema = {
    name: String,
    emailid: String,
    phno: String,
    pass: String,
    cpass: String
}

const Note = mongoose.model("Note", notesSchema)

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Signup.html")

})

app.post("/", function (req, res) {
    let newNote = new Note({
        name: req.body.name,
        emailid: req.body.emailid,
        phno: req.body.phno,
        pass: req.body.pass,
        cpass: req.body.cpass
    })
    newNote.save()
    res.redirect('/')
})
app.listen(1901, function () {
    console.log("server is running on 1901");
})
