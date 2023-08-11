import { RequestHandler } from "express";
import { UserService } from "./user.service";

const getUsers: RequestHandler = async (req, res) => {
  try {
    const users = await UserService.getUsers();

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Users Retrive successfully!",
      data: users,
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
  getUsers,
};
