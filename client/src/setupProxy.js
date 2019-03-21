const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy('/api/auth/google', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/auth/logout', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/auth/current_user', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/billing/stripe', { target: 'http://localhost:5000' }));
    // app.use(proxy('/api/*', { target: 'http://localhost:5000' }));

};
