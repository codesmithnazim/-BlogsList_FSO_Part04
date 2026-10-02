import { User } from "../models/user.model.js";
import logger from "../utils/logger.js";
import bcrypt from "bcrypt";

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ users: allUsers });
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { body: details } = req;
    if (details.password.length < 6)
      return res.status(400).json({
        error: "Password should at least 6 characters long",
      });
    details.password = await bcrypt.hash(details.password, 10);
    const storedDetails = await User.insertOne(details);
    logger.info("stored user details = ", storedDetails);
    res.status(201).json({ user: storedDetails });
  } catch (error) {
    next(error);
  }
};

export { getUser, getAllUsers, registerUser };
