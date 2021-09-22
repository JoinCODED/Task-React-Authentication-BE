const { model, Schema } = require('mongoose');
const msgSchema = new Schema(
  {
    msg: {
      type: String,
      required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: { createdAt: 'created_at' } }
);
// Duplicate the ID field.
msgSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
msgSchema.set('toJSON', {
  virtuals: true,
});

module.exports = model('Msg', msgSchema);
