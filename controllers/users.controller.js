var UserService = require('../services/user.service')
_this = this


exports.getUsers = async function (req, res, next) {
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var users = await UserService.getUsers({}, page, limit)
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Recieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createUser = async function (req, res, next) {
    var user = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone,        
        discount: req.body.discount
    }
    try {
        var createdUser = await UserService.createUser(user)
        return res.status(201).json({ status: 201, data: createdUser, message: "Succesfully Created User" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: "User Creation was Unsuccesfull" })
    }
}

exports.updateUser = async function (req, res, next) {
    if (!req.body._id) {
        return res.status(400).json({ status: 400., message: "Id must be present" })
    }
    var id = req.body._id;
    console.log(req.body)

    var user = {
        id,
        name: req.body.name ? req.body.name : null,
        address: req.body.address ? req.body.address : null,
        phone: req.body.phone ? req.body.phone : null,
        discount: req.body.discount ? req.body.discount : null,
    }
    try {
        var updatedUser = await UserService.updateUser(user)
        return res.status(200).json({ status: 200, data: updatedUser, message: "Succesfully Updated User" })
    } catch (e) {
        return res.status(400).json({ status: 400., message: e.message })
    }
}

exports.removeUser = async function (req, res, next) {
    var id = req.params.id;
    try {
        var removed = await UserService.removeUser(id)
        return res.status(204).json({ status: 204, message: "Succesfully User Removed" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}