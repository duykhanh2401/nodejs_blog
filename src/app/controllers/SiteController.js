const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
  // [GET] /
  index(req, res, next) {
    // res.render('home');
        Course.find({})
            .then(course => {
                // Truyền dữ liệu vào handlebars
                res.render('home', { course: mutipleMongooseToObject(course) })}
            )
            .catch(next)
  }

    // [GET] /sreach
    search(req, res) {
            res.render('search');
        }
    }

module.exports = new SiteController();
