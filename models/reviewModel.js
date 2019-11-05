const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Review cannot be empty']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

tourSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'tour'
  });
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
