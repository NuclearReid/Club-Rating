const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const clubSchema = new Schema({
    clubName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
        // set up requirments for the password later on
    },

});

clubSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

clubSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
}

const Club = model('Club', clubSchema);

module.exports = Club;