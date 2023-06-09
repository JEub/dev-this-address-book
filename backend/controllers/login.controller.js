const LoginUser = require('../models/login.model');    
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.registerUser = (request, response) => {
    LoginUser.create(request.body) 
        .then((user) => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.FIRST_SECRET_KEY);
            response
                .cookie("usertoken", userToken, {
                    httpOnly: true // read only cookie from server side
                })
                .json({msg: "Success!", user: user})
            response.status(201).json(user)
            console.log("login created" + user);
        })
        .catch((err) => {
            console.log(err);
            response.status(400).json(err);
            console.log(request.data);
        });
// Move to login/register page on front end
// login-
// axios.post('http://localhost:8000/api/register', payload, {withCredentials: true})
// register-
// axios.post('http://localhost:8000/api/login', payload, {withCredentials: true})
}
module.exports.loginUser = async(request, response) => {
    // checks if user is in database
    const user = await LoginUser.findOne({username: request.body.username});
    if(user === null){
        return response.sendStatus(404)
    }
    // compare password entered on form to hashed pass in db
    const correctPassword = await bcrypt.compare(request.body.password, user.password);
    if(!correctPassword) {
        return response.sendStatus(403);
    }
    const userToken = jwt.sign({
        id: user._id
    }, process.env.FIRST_SECRET_KEY);
    // response boject allows for chained calls of cookie and json
    response
        .cookie('usertoken', userToken, {httpOnly: true})
        .json({msg:"Successful login!"});
}
module.exports.logoutUser = (req, res) => {
    res.clearCookie('usertoken')
    res.sendStatus(302)
}
module.exports.getAllUsers = (request, response) => {
    LoginUser.find({})
        .then((user) => {
            console.log(user); 
            response.status(200).json(user);
        })
        .catch((err) => {
            console.log(err);
            response.status(404).json(err);
            console.log(request.data);
        })
}
module.exports.getUser = (request, response) => {
    LoginUser.findOne({_id:request.params.id})
        .then((user) => {
            response.status(200).json(user);
            console.log(user);
        })
        .catch((err) => {
            console.log(err);
            response.status(404).json(err)
            console.log(request.data);
        });
}
async function oneAfterAnother() {
    try {
        const firstResult = await firstFunc();
        const secondResult = await secondFunc(firstResult);
 
        return secondResult;
    } catch(err) {
        // do something with the error here
    }
}
