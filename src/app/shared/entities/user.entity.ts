import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  cpf?: string;

  @Column()
  phone!: string;

  @BeforeInsert()
  beforeInsert() {
    this.id = randomUUID();
  }
}
