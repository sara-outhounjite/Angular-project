import { Users } from "../../Users";

// comment.model.ts
export class Comment{
  id!:number;
  content!:String;
  user!:Users;
  constructor(){}
}
  
  