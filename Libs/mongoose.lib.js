const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const serverConfig = require("../Configs/Server.Config");

mongoose.set('debug', true);
// mongoose.connect(serverConfig.dbUrl);

module.exports = mongoose;