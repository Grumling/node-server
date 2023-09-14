const user = {};
const UserModel = require('./models/user.model');

// user Read
user.getAll = (callback) => {

    UserModel.find({}).then( (user) => {

        callback(200, {'message' : 'Brugeren Hentet', 'data' : user});

    }).catch( (err) => {
            
        callback(200, {'message' : 'Brugeren kunne ikke hentes', 'data' : err});
    
    });
    
};

module.exports = user;