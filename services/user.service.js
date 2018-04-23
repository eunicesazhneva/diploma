var User = require('../models/user.model')

_this = this

exports.getUsers = async function (query, page, limit) {

    var options = {
        page,
        limit
    }


    try {
        var users = await User.paginate(query, options)

        return users;

    } catch (e) {

        throw Error('Error while Paginating Users')
    }
}

exports.createUser = async function (user) {

    var newUser = new User({
        name: user.name,
        address: user.address,
        phone: user.phone,
        discount: user.discount
    })

    try {

        var savedUser = await newUser.save()

        return savedUser;
    } catch (e) {

        throw Error("Error while Creating User")
    }
}


exports.updateUser = async function (user) {
    var id = user.id

    try {

        var oldUser = await User.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }

    if (!oldUser) {
        return false;
    }

    console.log(oldUser)

    oldUser.name = user.name
    oldUser.address = user.address
    oldUser.phone = user.phone
    oldUser.discount = user.discount


    console.log(oldUser)

    try {
        var savedUser = await oldUser.save()
        return savedUser;
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
}

exports.removeUser = async function (id) {
    try {
        var removed = await User.remove({ _id: id })
        return removed
    } catch (e) {
        throw Error("Error Occured while Removing the User")
    }
}