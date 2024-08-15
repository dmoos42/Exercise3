const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Exercise3.html'));
});


app.post('/validatePhoneNb', (req, res) => {
    let message = validatePhoneNb(req, res);
    res.send(message);
})

function validatePhoneNb(req, res) {
    let name = req.body.name;
    let phone = req.body.phone;

    if(/^\d{3}-\d{3}-\d{4}$/.test(phone)){
        return `Hello, ${name}, your phone number is valid.`;
    } else {
        return `Hello, ${name}, your phone number "${phone}" is invalid, please make sure it follows the required format.`;
    }
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
