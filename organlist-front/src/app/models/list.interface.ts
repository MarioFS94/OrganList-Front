import { UserInterface } from "./user.interface";

export interface ListInterface {
  id: string;
  name: string;
  description:string;
  favorite:boolean;
  user:UserInterface; //creador de la lista
}
