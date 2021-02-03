const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys_dev").mongoURI
const users = require("./routes/api/users")
const breadprofile = require('./routes/api/breadprofile')
const breads = require('./routes/api/breads');
const cartitems =  require('./routes/api/cartitems')
const path = require('path');


const passport = require('passport');
// const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
    
app.get("/", (req, res) => res.send("Hello World"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/breadprofile", breadprofile);
app.use("/api/breads", breads);
app.use("/api/cartitems", cartitems);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));