import { UserClass } from "./user";

export class ListClass {
  id!: number;
  name!: string;
  description!: string;
  favorite!: boolean; // default false
  user!: UserClass; //creador de la lista

  constructor(){}
}
