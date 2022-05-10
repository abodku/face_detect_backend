// const express=require('express');
// const bcrypt=require('bcrypt-nodejs');
// const { json } = require('express');
// const cors=require('cors');

// const database={
//     users:[
        // {
        //     id:'1',
        //     name:'abd',
        //     password:'abd',
        //     email:'abd@gmail.com',
        //     entries:0,
        //     joined:new Date()
        // },
//         {
//             id:'2',
//             name:'sara',
//             password:'sara',
//             email:'sara@gmail.com',
//             entries:0,
//             joined:new Date()
//         }
//     ],
//     login:{
//         id:123,
//         hash:'',
//         email:'abd@gmail.com'

//     }
// }

// const app=express();

// app.use(express.json());
// app.use(cors());
// app.get('/',(req,res)=>{
//     res.send(database.users)
// })

// app.post('/test',(req,res)=>{
//     const {password}=req.body;
//     bcrypt.compare(password, "$2a$10$XWA.RRp8Q0eVqpNqlJkQYO1Ad99dsZQ7hMlSPaduGcZqy0LqiYAzC", function(err, res) {
//         console.log('first hash true=',res);
//     });
//     bcrypt.compare(password, "$2a$10$/DWwLnRFwD0tTKbHKeMsCeqLLMBfxotN/vO0cPBd33aP8WYS66hQG", function(err, res) {
//         console.log('second hash true=',res);
//     });
//     bcrypt.compare("veggies", "$2a$10$XWA.RRp8Q0eVqpNqlJkQYO1Ad99dsZQ7hMlSPaduGcZqy0LqiYAzC", function(err, res) {
//         console.log('first hash false=',res);
//     });
//     bcrypt.compare("veggies", "$2a$10$/DWwLnRFwD0tTKbHKeMsCeqLLMBfxotN/vO0cPBd33aP8WYS66hQG", function(err, res) {
//         console.log('second hash false=',res);
//     })
//     bcrypt.hash(password, null, null, function(err, hash) {
//         console.log(hash)
//     });
//     res.json('all good')

// })

// app.post('/signin',(req,res)=>{
//     if((req.body.email===database.users[0].email ||
//         req.body.email===database.users[0].name) &&
//         req.body.password===database.users[0].password){
//             res.json(database.users[0])
//         }else{
//             res.status(400).json('false')
//         }
// })

// // app.post('/signin',(req,res)=>{
// //     if(req.body.email===database.users[0].email &&
// //         req.body.password===database.users[0].password){
// //             res.json(database.users[0])
// //         }else{
// //             res.status(400).json('false')
// //         }
// // })

// app.post('/register',(req,res)=>{
//     const {name, password, email}=req.body;
//     database.users.push({
//         id:database.users.length+1,
//         name:name,
//         email:email,
//         entries:0,
//         joined:new Date()
//     })
//     res.json(database.users[database.users.length-1])
// })

// app.get('/profile/:id',(req,res)=>{
//     const {id}=req.params;
//     let found=false;

//     for (i of database.users){
//         if (i.id===id){
//             found=true;
//             return res.json(i);
//         }
//     }

//     if (!found){
//         res.status(404).json('not found')
//     }
// })

// app.put('/image',(req,res)=>{
//     const {id}=req.body;
//     let found=false;

//     for (i of database.users){
//         if (i.id===id){
//             found=true;
//             i.entries++;
//             return res.json(i.entries);
//         }
//     }

//     if (!found){
//         res.status(404).json('not found')
//     }
// })

// app.listen(3001,()=>{
//     console.log('good')
// })


///////////////////////////////////////////////////////////
