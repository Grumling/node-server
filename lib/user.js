const User = require('./models/user.model');
const user = {};

// user Read
user.read = (callback) => {

    User.find({}).then( (user) => {

        callback(200, {'message' : 'Brugeren Hentet', 'data' : user});

    }).catch( (err) => {
            
        callback(200, {'message' : 'Brugeren kunne ikke hentes', 'data' : err});
    
    });
    
};

// user Create
user.create = (payload, callback) => {

    console.log('user.create payload:', payload);

    User.create(payload).then( (user) => {

        callback(200, {'message' : 'Bruger er oprettet', 'data' : user});

    }).catch( (err) => {
            
        callback(200, {'message' : 'Brugeren kunne ikke oprettes', 'data' : err});
    
    });

};

// user Delete
user.delete = (payload, callback) => {

    console.log('user.delete payload:', payload);
    
    User.deleteOne({"email": payload.email}).then( (result) => {

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

module.exports = user;