//     MODULES/PACKAGES PART
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')




// MONOOOSE AND DATABASE CONNECTIVITY PART
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo')
    console.log('db connected')
}

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('User', userSchema);




//  MIDDLE-WARES
const server = express();

server.use(cors());
server.use(bodyParser.json());



// CRUD - Create
server.post('/post', async (req, res) => {
    let user = new User();
    user.username = req.body.username
    user.password = req.body.password
    const doc = await user.save();
    console.log(doc)
    res.json(doc)
})



// CRUD - Read
server.get('/get', async (req, res) => {
    let docs = await User.find({})
    res.send(docs)
})


//  LISTEN ON 8080
server.listen(8080, () => {
    console.log('server started')
})


