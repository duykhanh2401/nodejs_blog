const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    // [GET] /me/stored/coures
    

    storedCoures(req, res, next) {
        Promise.all([Course.find({}), Course.countDeleted()])
            .then(([courses, countDeleted]) => {
                res.render('me/stored-coures',{
                    countDeleted,
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
        
    }

    // [GET] /me/strash/coures
    trashCoures(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-coures',{courses: mutipleMongooseToObject(courses)}))
            .catch(next)
    }
}

module.exports = new MeController();
