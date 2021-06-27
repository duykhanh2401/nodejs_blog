const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/duykhanh_education_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('connect success !!!');
  } catch (error) {
    console.log('connect error !!!');
  }
}

module.exports = { connect };
