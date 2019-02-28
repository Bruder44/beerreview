var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
});



UserSchema.statics.authenticate = function(email, password, cb) {
  User.findOne({ email: email})
    .exec(function(error, user) {
      if (error) {
        return (error);
      } else if ( !user ) {
        var err = new Error('User not found');
        error.status = 401;
        return cb(err);
      }
      bcrypt.compare(password, user.password, function(error, result) {
        if (result === true) {
          return cb(null, user);
        } else {
          return cb();
        }
      }
    )
  }
)};


// hash password before saving to database
UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

var users = mongoose.model('users', UserSchema);

module.exports = users;