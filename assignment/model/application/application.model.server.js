var mongoose = require('mongoose');
var ApplicationSchema = require("./application.schema.server");
var ApplicationModel = mongoose.model("ApplicationModel", ApplicationSchema);

ApplicationModel.findAllApplications = findAllApplications;

module.exports = ApplicationModel;

function findAllApplications(){
    ApplicationModel.find(function (err, docs) {
        console.log(err);
        console.log(docs);
    })
}


