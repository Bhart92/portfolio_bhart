const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../../', 'public');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
require('babel-polyfill');
const mailer = require('nodemailer');

app.use(bodyParser.json());
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('*', (req, res) => { 
    res.sendFile(path.join(publicPath, 'index.html'));	
 });

 app.post('/contact', (req, res) => {
    const { email = '', name = '', message = '' } = req.body
  
    mailer({ email, name, text: message }).then(() => {
      console.log(`Sent the message "${message}" from <${name}> ${email}.`);
      res.redirect('/#success');
    }).catch((error) => {
      console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
      res.redirect('/#error');
    })
  })
app.listen(port, () => { 'Server Up!' });