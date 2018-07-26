
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OAuthAccessTokenSchema = new Schema({
  accessToken: { type: String },
  accessTokenExpiresAt: { type: Date },
  client: { type: Object },
  user: { type : Schema.Types.ObjectId, ref: 'usuario' }
});

module.exports = OAuthAccessTokenSchema;