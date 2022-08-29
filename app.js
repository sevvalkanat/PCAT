const express = require('express');
const ejs = require('ejs')

const app = express();

//template engine

app.set("view engine","ejs")

const myLogger = (req,res,next) =>  {
    console.log("middleware log 1")
}

//middlewares

app.use(express.static('public'))

//ROUTES

app.get('/',(req,res) =>  {
    res.render('index')
});
app.get('/about',(req,res) =>  {
    res.render('about')
});
app.get('/add',(req,res) =>  {
    res.render('add')
});

;
const port = 3000;
app.listen(port, () => {
    console.log("sunucu 3000 portunda başlatıldı..");
}
);