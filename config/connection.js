const mongoose = require('mongoose');

// const uri = 'mongodb+srv://fsf-admin:A8BTDA45QbXgucv@cluster0.qektd.mongodb.net/mernshopping?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  // mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
