import { Express } from "express";
import userRoutes from "../../app/features/user/user.routes";

export const makeRoutes = (app: Express) => {
  app.use(userRoutes());
};
