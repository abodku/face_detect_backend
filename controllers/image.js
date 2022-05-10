const Clarifai=require('clarifai');


const app = new Clarifai.App({
    apiKey: process.env.API_CLARIFAI
   });

const imageURLHandler=()=>(req,res)=>{
    app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,req.body.input)
          .then(data=>res.json(data))
          .catch(e=> res.status(400).json(e))
  
}

const imageHandler=(req,res,db)=>{
    const {id}=req.body;

    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries=>{
            res.json(entries[0].entries);
        })
        .catch(err=>res.json('error adding entries'))
}

module.exports={
    imageURLHandler:imageURLHandler,
    imageHandler:imageHandler
}