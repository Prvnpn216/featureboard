var restful = require('node-restful');//important read

// It takes the mongoose model we created an converts it into a rest api and provide us with all the basic crud operations

module.exports = function(app, route){
// setup the controller for REST and decide all the av available method with it.

var rest = restful.model(

'Login',
app.models.Login

).methods(['get','put','post']); 

// register this api at the provided route passed in as the argument.

rest.register(app, route);

//lastly return the middleware for providing capabilities in per controller basis

return function(req, res, next){

 next();

};
};

