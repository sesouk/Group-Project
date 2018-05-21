
module.exports ={
    getUsers: (req,res,next) =>{
        const dbInstance = req.app.get('db');
        console.log('received request')
        dbInstance.getUsers().then(users=> res.status(200).send(users))
        .catch(error => console.log(error));
    }


}

// users: #    userid    username    useremail    usercity    userstate    userzip    userphone    useraddress