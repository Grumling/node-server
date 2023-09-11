const UserModel = require('./models/user.model');
const users = {};

// Users (READ)
users.getAll = (callback) => {

    console.log('users.getAll:');

    UserModel.find({}).then( (users) => {

        callback(200, {'message' : 'Brugerene Hentet', 'data' : users});

    }).catch( (err) => {
            
        callback(200, {'message' : 'Brugerene kunne ikke hentes', 'data' : err});
    
    });
    
};

module.exports = users;