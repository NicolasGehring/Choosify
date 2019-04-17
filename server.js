const express = require("express");
const app = express();
const port = 3000;
let path = require('path');

//This exports all the files in the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//This handler get's the redirect from spotify
app.get("/dashboard", (req, res) => {
  console.log('received')
  res.render('dashboard.html')
});

app.get("/", (req, res) => {
  console.log('bla')

  res.render('index.html')
});



app.listen(port, () => console.log(`Webapp running on Port: ${port}!`));
