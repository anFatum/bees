const rootRoute = require("./Root.Route");
const userRoute = require("./User.Route");
const registerRoute = require("./Register.Route");

module.exports = (app) => {
    app.use('/', rootRoute);
    app.use('/users', userRoute);
    app.use('/register', registerRoute)
};