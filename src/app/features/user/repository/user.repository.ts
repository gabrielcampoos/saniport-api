import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { User } from "../../../models";
import { UserEntity } from "../../../shared/entities";
import { CreateUserDto } from "../dtos";

export class UserRepository {
  private _manager = DatabaseConnection.connection.manager;

  async verifyIfUserExistsByEmail(email?: string): Promise<User | null> {
    const existingUser = await this._manager.findOneBy(UserEntity, {
      email,
    });

    if (!existingUser) return null;

    return this.entityToModel(existingUser);
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const { name, email, cpf, phone } = data;

    const createUser = this._manager.create(UserEntity, {
      name,
      email,
      cpf,
      phone,
    });

    const createdUser = await this._manager.save(createUser);

    return this.entityToModel(createdUser);
  }

  async listUsers(): Promise<User[]> {
    const listOfUsers = await this._manager.find(UserEntity);

    return listOfUsers.map((users) => this.entityToModel(users));
  }

  private entityToModel(dataDB: UserEntity): User {
    return new User(
      dataDB.id,
      dataDB.name,
      dataDB.email,
      dataDB.phone,
      dataDB.cpf
    );
  }
}
