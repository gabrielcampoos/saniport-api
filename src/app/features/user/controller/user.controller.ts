import { Request, Response } from "express";
import { CreateUserDto } from "../dtos";
import {
  CreateUserUsecase,
  GetUserUsecase,
  ListAllUsersUsecase,
  LoginUserUsecase,
} from "../usecases";
import { Result, httpHelper } from "../../../shared/utils";

export class UserController {
  static async createUser(request: Request, response: Response) {
    const user: CreateUserDto = request.body;

    try {
      const usecase = new CreateUserUsecase();

      const result = await usecase.execute(user);

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async loginUser(request: Request, response: Response) {
    const { email }: CreateUserDto = request.body;

    try {
      const usecase = new LoginUserUsecase();

      const result = await usecase.execute({ email });

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async listAllUsers(request: Request, response: Response) {
    try {
      const usecase = new ListAllUsersUsecase();

      const result = await usecase.execute();

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async getUser(request: Request, response: Response) {
    try {
      const { name } = request.user;

      const usecase = new GetUserUsecase();

      const result = await usecase.execute(name);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }
}
