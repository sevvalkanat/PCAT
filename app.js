const express = require('express');
const mongoose = require('mongoose')
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');

const app = express();

//connect db

mongoose.connect('mongodb://localhost/pcat-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//template engine

app.set("view engine","ejs")

const myLogger = (req,res,next) =>  {
    console.log("middleware log 1")
}

//middlewares

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//ROUTES

app.get('/',async(req,res) =>  {
    const photos = await Photo.find({})
    res.render('index',{
        photos
    })
});

app.get('/photos/:id',(req,res) =>  {
   // console.log(req.params.id)
    // res.render('photos')
    const photo = photo.findById(req.params.id)
    res.render('photo',{
        photo
    })

});   
app.get('/about',(req,res) =>  {
    res.render('about')
});
app.get('/add',(req,res) =>  {
    res.render('add')
});

app.get('/photos',async(req,res) =>  {
    await Photo.create(req.body)
    res.redirect('/')
});  

;
const port = 3000;
app.listen(port, () => {
    console.log("sunucu 3000 portunda başlatıldı..");
}
);