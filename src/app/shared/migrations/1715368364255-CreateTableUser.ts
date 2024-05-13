import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1715311333252 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isNullable: false,
            isPrimary: true,
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
          },
          {
            name: "email",
            type: "text",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "cpf",
            type: "varchar",
            length: "15",
            isNullable: true,
            isUnique: true,
          },
          {
            name: "phone",
            type: "varchar",
            length: "15",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user", true, true, true);
  }
}
