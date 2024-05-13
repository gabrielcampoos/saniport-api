import { Router } from "express";
import { UserController } from "./controller";

export default () => {
  const router = Router();

  router.post("/user", UserController.createUser);
  router.post("/login", UserController.loginUser);

  router.get("/user", UserController.listAllUsers);
  router.get("/getDataUser", UserController.getUser);

  return router;
};
