const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: 'String', maxLength: 255 },
    description: { type: 'String', maxLength: 600 },
    image: { type: 'String', maxLength: 255 },
    videoID: { type: 'String'},
    level: { type: 'String'},
    slug: { type: String, slug: 'name', unique: true },
},
{ 
    timestamps: true,
});

Course.plugin(mongoose_delete, { 
    overrideMethods: 'all',
    deletedAt : true,
});


module.exports = mongoose.model('Course', Course);
