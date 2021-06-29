const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    // [GET] /me/stored/coures
    storedCoures(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-coures',{courses: mutipleMongooseToObject(courses)}))
            .catch(next)
        
    }

    trashCoures(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-coures',{courses: mutipleMongooseToObject(courses)}))
            .catch(next)
    }
}

module.exports = new MeController();
