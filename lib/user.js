const UserModel = require('./models/user.model');
const user = {};


// user Create
user.create = (payload, callback) => {

    console.log('user.create payload:', payload);

    UserModel.create(payload).then( (user) => {

        callback(200, {'message' : 'Bruger er oprettet', 'data' : user});

    }).catch( (err) => {
            
        callback(200, {'message' : 'Brugeren kunne ikke oprettes', 'data' : err});
    
    });

};

// user Delete
user.delete = (payload, callback) => {

    console.log('user.delete payload:', payload);
    
    UserModel.deleteOne({"email": payload.email}).then( (result) => {

        callback(200, {'message' : 'Bruger er slettet', 'data' : result});

    }).catch( (err) => {
            
        callback(200, {'message' : 'Brugeren kunne ikke slettes', 'data' : err});
    
    });

};

// user Update
user.update = (payload, callback) => {

    console.log('user.update payload:', payload);
    
    User.updateOne({ "email": payload.email }, payload).then( (user) => {

        callback(200, {'message' : 'Bruger er opdateret', 'data' : user});

    }).catch( (err) => {
            
        callback(200, {'message' : 'Brugeren kunne ikke opdateres', 'data' : err});
    
    });

};


// user Read
user.getUserByEmail = (email, callback) => {

    UserModel.find({email: email}).then( (users) => {

        callback(200, {'message' : 'Brugeren Hentet', 'data' : users});

    }).catch( (err) => {
            
        callback(200, {'message' : 'Brugeren kunne ikke hentes', 'data' : err});
    
    });
    
};

module.exports = user;