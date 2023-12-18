const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleMongooseError } = require('../helpers');

const waterSchema = new Schema({
  waters: {
    type: Map,
    of: Number,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

waterSchema.post('save', handleMongooseError);
const Water = model('water', waterSchema);

module.exports = { Water };
