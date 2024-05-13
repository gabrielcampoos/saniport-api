import { Result, ResultDto } from "../../../shared/utils";
import { UserRepository } from "../repository";

export class GetUserUsecase {
  async execute(email: string): Promise<ResultDto> {
    const userRepository = new UserRepository();

    const user = await userRepository.verifyIfUserExistsByEmail(email);

    if (!user) return Result.error(404, "Usuário não encontrado.");

    return Result.success(
      200,
      "Usuário encontrado com sucesso.",
      user.toJson()
    );
  }
}
