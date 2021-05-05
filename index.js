const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const addrouter = require('./routes/addRouter')
const PORT = process.env.PORT || 2000;

app.use(cors());

app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI,{ useFindAndModify: false , useNewUrlParser: true,useUnifiedTopology: true },()=>console.log('Connected to db'));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
app.use('/add',addrouter)
app.listen(PORT,()=>{
    console.log("yay")
});