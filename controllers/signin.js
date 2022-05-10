const handelSignin=(req,res,db,bcrypt)=>{
    const {email,password}=req.body;

    db.select('email','hash').from('login')
        .where('email','=',email)    
        .then(data=>{
            const isValid=bcrypt.compareSync(password,data[0].hash)
            if(isValid){
                return db.select('*').from('users')
                .where('email','=',email)
                .then(user=>{
                    res.json(user[0])
                })
                .catch(err=>res.status(400).json('try again'))
            }else{
                res.status(403).json('wrong username or password')
                console.log('wrong user name or password')
            }
        })
    .catch(err=>res.status(400).json('cant slove'))
};

module.exports={
    handelSignin:handelSignin
}