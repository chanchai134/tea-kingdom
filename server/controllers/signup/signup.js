const bcrypt = require('bcryptjs')

const User = require('../../models/user')
    
module.exports = function(req, res){
    //find email if it was used
    User.findOne({
        email: req.body.email
    })
        .then(user =>{
            if(user) {
                res.json({
                    status: 'Email already used'
                })
            } else{
                //create New User
                var newUser = new User({
                    type: 'Consumer',
                    email: req.body.email,
                    password: req.body.password,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    address: req.body.address,
                    phone: req.body.phone,
                    profileImage: '/imgs/profile_default.png'
                })
                
                //Encode the password with bcrypt
                bcrypt.genSalt(10, (err, salt) => {
                    if(err){
                        console.error('Error: ', err);
                    } else{
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err){
                                console.error('Error: ', err)
                            } else{
                                //Save password in hash
                                newUser.password = hash;
                                newUser.save()
                                    .then(user => {
                                        res.json({
                                            status: "Successful Registration"
                                        })
                                    })
                            }
                        })
                    }
                })
            }
        })
   }