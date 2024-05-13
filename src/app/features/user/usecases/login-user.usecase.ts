import { Result, ResultDto } from "../../../shared/utils";
import { CreateUserDto } from "../dtos";
import { UserRepository } from "../repository";

type LoginUserDto = Omit<CreateUserDto, "name" | "cof" | "phone">;

export class LoginUserUsecase {
  async execute(data: LoginUserDto): Promise<ResultDto> {
    const userRepository = new UserRepository();

    const existingUser = await userRepository.verifyIfUserExistsByEmail(
      data.email
    );

    if (!existingUser) return Result.error(404, "Usuário não encontrado.");

    return Result.success(
      200,
      "Usuário logado com sucesso.",
      existingUser.toJson()
    );
  }
}
