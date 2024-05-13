import { Base } from "./Base";

export interface UserJson {
  id: string;
  name: string;
  email: string;
  cpf?: string;
  phone: string;
}

export class User extends Base {
  constructor(
    _id: string,
    private _name: string,
    private _email: string,
    private _phone: string,
    private _cpf?: string
  ) {
    super();
  }

  toJson(): UserJson {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      cpf: this._cpf,
      phone: this._phone,
    };
  }
}
