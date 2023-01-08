const express = require('express');
const route = require('./routes/route.js');
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
mongoose.set('strictQuery', false)


mongoose.connect("mongodb+srv://Priyanka19:G8reXRlHUbBX65ev@plutonium01.9fxu8wj.mongodb.net/CowinDatabase", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen( 3000, () => {
    console.log('Express app running on port ' + (3000))
});