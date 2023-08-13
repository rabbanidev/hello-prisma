import { RequestHandler } from "express";
import { CategoryService } from "./category.service";

const createCategory: RequestHandler = async (req, res) => {
  try {
    const result = await CategoryService.createCategory(req.body);

    res.status(201).json({
      statusCode: 201,
      status: "success",
      message: "Category created successfully!",
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

const getAllCategories: RequestHandler = async (req, res) => {
  try {
    const result = await CategoryService.getAllCategories();

    res.status(200).json({
      statusCode: 200,
      status: "success",
      message: "Categories retrive successfully!",
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

export const CategoryController = {
  createCategory,
  getAllCategories,
};
