const mongoose = require('mongoose');
const connect = async () => {
        await mongoose.connect('mongodb://0.0.0.0/twitter_dev');
}
module.exports = connect;