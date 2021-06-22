const Course = require('../models/Course');

class SiteController {
  // [GET] /news
  index(req, res) {
    // res.render('home');
        Course.find({}, (err, course) =>{
            if(!err) {
                res.json(course)
            }else {
                
            }
        })
  }

  // [GET] /news/:slug
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
