// const mongoose = require('mongoose');
// const validator = require('validator');

// const userSchema = new Mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minLength: 8,
//     maxLength: 16,
//     validate(value) {
//       if (value.length < 8 || value.length > 16) {
//         throw new Error('Password must be between 8 and 16 characters');
//       }
//     },
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     unique: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('Invalid email address');
//       }
//     },
//   },
//   avatar: {
//     type: Buffer,
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
