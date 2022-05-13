const Clarifai=require('clarifai');


const app = new Clarifai.App({
    apiKey: process.env.API_CLARIFAI
   });

const imageURLHandlerFDM=()=>(req,res)=>{
    app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,req.body.input)
          .then(data=>res.json(data))
          .catch(e=> res.status(400).json(e))
          console.log(Clarifai)

}

const imageURLHandlerCM=()=>(req,res)=>{
    app.models
            .predict(
                Clarifai.CELEBRITY_MODEL,req.body.input)
                .then(data=>res.json(data))
                .catch(e=>res.status(400).json(e))

}

const imageURLHandlerGM=()=>(req,res)=>{
    app.models
        .predict(Clarifai
            .GENERAL_MODEL,
                req.body.input)
                .then(data=>res.json(data))
                .then(data=>console.log(data))
                .catch(err=>console.log(err))
}

const imageTest=()=>(req,res)=>{
    app.models
        .predict(Clarifai
            .GENERAL_MODEL,
                req.body.input)
                .then(data=>res.json(data))
                .then(data=>console.log(data))
                .catch(err=>console.log(err))
                console.log(Clarifai)
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
    imageURLHandlerFDM:imageURLHandlerFDM,
    imageHandler:imageHandler,
    imageURLHandlerCM:imageURLHandlerCM,
    imageTest:imageTest,
    imageURLHandlerGM:imageURLHandlerGM
}