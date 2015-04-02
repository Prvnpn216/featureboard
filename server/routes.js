// this file is created to create the routes (Bind the URLs and controller actions)

module.exports = {
'/login': require('./controllers/LoginController'),
'/afterlogin': require('./controllers/AfterLoginController'),
'/register': require('./controllers/LoginController')
};
