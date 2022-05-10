
const express=require('express');
const bcrypt=require('bcrypt-nodejs');
const { json, response } = require('express');
const cors=require('cors');
const knex=require('knex');

const signin=require('./controllers/signin');
const register = require('./controllers/register');
const profileId = require('./controllers/profileId');
const image = require('./controllers/image');

const db= knex({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl : true
    }
});

const app=express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json('its working')
    // db.select('name','email','entries').from('users')
    //     .then(response=>res.json(response))
})

app.post('/signin',(req,res)=>{
    signin.handelSignin(req,res,db,bcrypt)
});

app.post('/register',(req,res)=>{
    register.handelRegister(req,res,db,bcrypt)
});

app.get('/profile/:id',(req,res)=>{
    profileId.profileHandler(req,res,db)
});

app.put('/image',(req,res)=>{
    image.imageHandler(req,res,db)
});

app.post('/imageURL',image.imageURLHandler());

app.listen(process.env.PORT||3001,()=>{
    console.log('good')
})

console.log(process.env.PORT)