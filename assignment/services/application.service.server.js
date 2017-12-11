module.exports = function (app) {
    var applicationModel = require('../model/application/application.model.server');

    app.get('/api/application', findAllApplications);

    function findAllApplications(req, res) {
        applicationModel.findAllApplications()
            .then(function (application) {
                res.json(application);
            })
    }


}