var mongoose = require('mongoose');

var ApplicationSchema = mongoose.Schema({
    name: String,
    connectionString: String,
    databaseName: String,
    scripts: String,
    pages: [{type: mongoose.Schema.Types.ObjectId,ref:'PageModel'}],
    entities: String

}, { collection: 'application' });

module.exports = UserSchema;