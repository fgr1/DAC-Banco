import { MODEL } from "..";
export class BankAccount {
  constructor(
    public accountNumber?: string,
    public accountLimit?: string,
    public client?: MODEL.Client,
    public manager?: string,
    public created_at?: string
  ) {}
}
