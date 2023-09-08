const server = require('./lib/server');
const app = {};

app.init = () => {

    console.log('app.init()')
    server.run();

};

app.init();