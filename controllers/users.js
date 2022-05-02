import { userModel } from '../models/userModel.js'

export const getUsers = async(req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const getUserById = async(req, res) => {
    try {
        const findUser = req.params.id;
        const User = await userModel.findById(findUser);
        res.status(200).json(User);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const createUser = async(req, res) => {
    try {
        const newUser = req.body;
        const User = new userModel(newUser);
        await User.save();
        res.status(200).json(User)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const updateUser = async(req, res) => {
    try {
        const updateUser = req.body;
        const User = await userModel.findOneAndUpdate({ _id: updateUser._id },
            updateUser, { new: true }
        );
        res.status(200).json(User)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
export const deleteUser = async(req, res) => {
    try {
        const User = await userModel.deleteOne({ _id: req.params.id });
        res.status(200).json(User)
    } catch (err) {
        res.status(500).json({ error: err });
    }
};