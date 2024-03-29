import { MODEL } from "..";

export class Client extends MODEL.User {
  constructor(
    public id?: string,
    public name?: string,
    public cpf?: string,
    public email?: string,
    public password?: string,
    public cellphone?: string,
    public type?: string,

    public salary?: string,
    public address?: MODEL.Address
  ) {
    super(id, name, cpf, email, password, cellphone, type);
  }
}
