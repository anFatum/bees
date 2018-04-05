const rootRoute = require("./Root.Route")
const userRoute = require("./User.Route")

module.exports = (app) => {
    app.use('/', rootRoute);
    app.use('/user', userRoute)
};