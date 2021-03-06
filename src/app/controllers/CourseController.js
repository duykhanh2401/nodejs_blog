const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug}) // req.params.slug - Lấy query para từ request
            .then(course => {
                res.render('course/show', { course: mongooseToObject(course)})
            })
            .catch(next)
    }

    // [GET] /course/create
    create(req, res, next) {
        res.render('course/create');
    }

    // [POST] /course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // [GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('course/edit', {course : mongooseToObject(course)})) 
            .catch(next)
        
    }

    // [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/coures'))
            .catch(next)
    }

    // [DELETE] /course/:id
    delete(req, res, next) {
        Course.delete({_id: req.params.id}, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
    // [DELETE] /course/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    

    // [PATCH] /course/:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController();
