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
    const options = req.query;
    const result = await PostService.getAllPosts(options);

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Posts retrive successfully!",
      meta: result.meta,
      data: result.data,
    });
  } catch (error) {
    console.log("error", error);

    res.status(500).json({
      statusCode: 500,
      status: "failed",
      message: "Something went wrong!",
    });
  }
};

const getSinglePost: RequestHandler = async (req, res) => {
  try {
    const result = await PostService.getSinglePost(Number(req.params.id));

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Post retrive successfully!",
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

const updatePost: RequestHandler = async (req, res) => {
  try {
    const result = await PostService.updatePost(
      Number(req.params.id),
      req.body
    );

    res.status(202).json({
      statusCode: 202,
      status: "success",
      message: "Post Updated successfully!",
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

const deletePost: RequestHandler = async (req, res) => {
  try {
    const result = await PostService.deletePost(Number(req.params.id));

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Post deleted successfully!",
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
  getSinglePost,
  updatePost,
  deletePost,
};
