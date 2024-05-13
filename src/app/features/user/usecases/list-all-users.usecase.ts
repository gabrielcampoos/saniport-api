import { UserJson } from "../../../models";
import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDto } from "../../../shared/utils";
import { UserRepository } from "../repository";

const PREFIX_CACHE = "list-all-users";

export class ListAllUsersUsecase {
  async execute(): Promise<ResultDto> {
    const userRepository = new UserRepository();

    const cacheRepository = new CacheRepository();

    const cacheUsers = await cacheRepository.get<UserJson[]>(PREFIX_CACHE);

    let users: UserJson[] = [];

    if (!cacheUsers) {
      const usersDB = await userRepository.listUsers();

      const users = usersDB.map((users) => users.toJson());

      await cacheRepository.set(PREFIX_CACHE, users);
    } else {
      users = cacheUsers;
    }

    return Result.success(200, "Usuários cadastrados.", users);
  }
}
