import { RequestHandler } from "express";
import { PostService } from "./post.service";

const createPost: RequestHandler = async (req, res) => {
  try {
    const result = await PostService.createPost(req.body);

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Post created successfully!",
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

const getAllPosts: RequestHandler = async (req, res) => {
  try {
    const result = await PostService.getAllPosts();

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Posts retrive successfully!",
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

export const PostController = {
  createPost,
  getAllPosts,
};
