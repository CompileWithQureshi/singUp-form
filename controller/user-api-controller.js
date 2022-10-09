
const user = require('../model/model');
const Routs = require('../router/user-api');
const getAllUser = async (req, res, next) => {

    let users;

    try {
        users = await user.find()
    } catch (error) {
        return next(error)
    }
    if (!users) {
        return res.status(500).json({ message: "User not found" })
    }
    return res.status(200).json({ users })


}

const CreateUser = async (req, res, next) => {

    let { name, email, password } = req.body
    if (!name && name.trim() === " " && !email && email.trim() === " " && !password && password.length > 6) {
        return res.status(422).json({ message: "Inavlid user" })
    }
    let users;
    try {
        users = new user({ name, email, password })

        users.save()
    } catch (error) {
        return next(error)
    }
    if (!users) {
        return res.status(404).json({ message: "User not found" })
    }
    return res.status(201).json({ users })
}

const UpdateUser = async (req, res, next) => {
    const id = req.params.id
    let { name, email, password } = req.body
    if (!name && name.trim() === " " && !email && email.trim() === " " && !password && password.length > 6) {
        return res.status(422).json({ message: "Inavlid user" })
    }
    let users;
    try {
        users = await user.findByIdAndUpdate(id, { name, email, password })
    } catch (error) {
        return next(error)
    }
    if (!users) {
        return res.status(500).json({ message: "User not updated" })
    }
    return res.status(201).json({ message: "User Updated sucessfull" })

}

const DelectUser = async (req, res, next) => {
    const id = req.params.id
    let Users;
    try {
        Users = await user.findByIdAndRemove(id)
    } catch (error) {
        return next(error)
    }
    if (!Users) {
        return res.status(422).json({ message: "Serve issue" })
    }
    return res.status(200).json({ User: Users })
}

const getById = async (req, res, next) => {
    const id = req.params.id

    let UserById
    try {
        UserById = await user.findById(id)
    } catch (error) {
        return next(error)
    }
    if (!UserById) {
        return res.status(500).json({ message: "User is not available" })
    }
    return res.status(201).json({ UserById })
}



exports.getAllUser = getAllUser
exports.CreateUser = CreateUser
exports.UpdateUser = UpdateUser
exports.DelectUser = DelectUser
exports.getById = getById