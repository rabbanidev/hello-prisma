import { RequestHandler } from "express";
import { UserService } from "./user.service";

const createUser: RequestHandler = async (req, res) => {
  try {
    const result = await UserService.createUser(req.body);

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "failed",
      message: "Something went wrong!",
    });
  }
};

const getUsers: RequestHandler = async (req, res) => {
  try {
    const result = await UserService.getUsers();

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Users Retrive successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "failed",
      message: "Something went wrong!",
    });
  }
};

const createOrUpdateProfile: RequestHandler = async (req, res) => {
  try {
    const result = await UserService.createOrUpdateProfile(req.body);

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Profile created or updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      status: "failed",
      message: "Something went wrong!",
    });
  }
};

export const UserController = {
  createUser,
  getUsers,
  createOrUpdateProfile,
};
