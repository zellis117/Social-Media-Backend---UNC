const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 128,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
      maxlength: 50,
    },
    reactions: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Reaction',
        },
      ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = thoughtSchema;
