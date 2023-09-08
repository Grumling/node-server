const productModel = require('./models/product.model');
const product = {};

// product Read
product.read = (callback) => {

    productModel.find({}).then( (product) => {

        callback(200, {'message' : 'product Hentet', 'data' : product});

    }).catch( (err) => {
            
        callback(200, {'message' : 'product kunne ikke hentes', 'data' : err});
    
    });
    
};

// product Create
product.create = (payload, callback) => {

    console.log('product.create payload:', payload);

    productModel.create(payload).then( (product) => {

        callback(200, {'message' : 'product er oprettet', 'data' : product});

    }).catch( (err) => {
            
        callback(200, {'message' : 'product kunne ikke oprettes', 'data' : err});
    
    });

};

// product Delete
product.delete = (payload, callback) => {

    console.log('product.delete payload:', payload);
    
    productModel.deleteOne({"_id": payload._id}).then( (result) => {

        callback(200, {'message' : 'product er slettet', 'data' : result});

    }).catch( (err) => {
            
        callback(200, {'message' : 'product kunne ikke slettes', 'data' : err});
    
    });

};

// product Update
product.update = (payload, callback) => {

    console.log('product.update payload:', payload);
    
    productModel.updateOne({ "_id": payload._id }, payload).then( (product) => {

        callback(200, {'message' : 'product er opdateret', 'data' : product});

    }).catch( (err) => {
            
        callback(200, {'message' : 'product kunne ikke opdateres', 'data' : err});
    
    });

};

module.exports = product;