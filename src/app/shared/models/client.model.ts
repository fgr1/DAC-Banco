import { MODEL } from "..";

export class Client extends MODEL.User {
  constructor(public salary?: string, public address?: string) {
    super();
  }
}
