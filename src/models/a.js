// const mongoose = require('mongoose');

// const aSchema = new mongoose.Schema(
//   {
//     text: {
//       type: String,
//       required: true,
//       trim: true,
//       maxLength: 2000,
//       validate(value) {
//         if (value.length > 2000) {
//           throw new Error("Post's maximum length is 2000 characters");
//         }
//       },
//     },
//   },
//   {
//     timestamps: { createdAt: true, updatedAt: false },
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );

// const aModel = mongoose.model('A', aSchema);

// module.exports = aModel;
