const rootRoute = require("./Root.Route");
const userRoute = require("./User.Route");
const registerRoute = require("./Register.Route");
const authRoute = require("./Authentification.Route");

module.exports = (app) => {
    app.use('/', rootRoute);
    app.use('/user', userRoute);
    app.use('/register', registerRoute);
    app.use('/auth', authRoute);
};