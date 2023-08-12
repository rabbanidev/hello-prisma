import express from "express";
import { UserController } from "./user.controller";

const route = express.Router();

route.post("/", UserController.createUser);
route.get("/", UserController.getUsers);

export const UserRoutes = route;
