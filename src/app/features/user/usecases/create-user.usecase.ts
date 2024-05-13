import { Result, ResultDto } from "../../../shared/utils";
import { CreateUserDto } from "../dtos";
import { UserRepository } from "../repository";

export class CreateUserUsecase {
  async execute(data: CreateUserDto): Promise<ResultDto> {
    const userRepository = new UserRepository();

    const existingUser = await userRepository.verifyIfUserExistsByEmail(
      data.email
    );

    if (existingUser) return Result.error(400, "Usuário já cadastrado.");

    const newUser = await userRepository.createUser(data);

    return Result.success(
      200,
      "Usuário cadastrado com sucesso.",
      newUser.toJson()
    );
  }
}
