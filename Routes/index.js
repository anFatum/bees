const rootRoute = require("./Root.Route");
const userRoute = require("./User.Route");
const registerRoute = require("./Register.Route");
const authRoute = require("./Authentification.Route");

module.exports = (app) => {
    app.use('/api/', rootRoute);
    app.use('/api/user', userRoute);
    app.use('/api/register', registerRoute);
    app.use('/api/auth', authRoute);
};