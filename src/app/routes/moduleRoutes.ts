import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { PostRoutes } from "../modules/post/post.route";

type IRoute = {
  path: string;
  route: Router;
};

const moduleRoutes: IRoute[] = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/posts",
    route: PostRoutes,
  },
];

export default moduleRoutes;
