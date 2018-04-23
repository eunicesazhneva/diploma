
var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
    name: String,
    address: Object,
    phone: String,
    discount: String,
    // authId: { type: Schema.Types.ObjectId, ref: 'Auth' },
    // order: { type: Schema.Types.ObjectId, ref: 'Order' },
    githubId: String,
    facebookId: String
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;