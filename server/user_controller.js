const dbInstance = req.app.get('db');
module.exports ={
    allUsers: (req,res,next) =>{
        // const dbInstance = req.app.get('db');
        dbInstance.getUsers().then(users=> res.status(200).send(users))
        .catch(error => console.log(error));
    }


}

// users: #    userid    username    useremail    usercity    userstate    userzip    userphone    useraddress