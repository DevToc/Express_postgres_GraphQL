import { Query, Resolver, Mutation, Arg } from "type-graphql"
import { UserInput, User } from "./user.schema"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

@Resolver(()=>User)
export class UserResolver{
  private users = prisma.user.findMany();
  
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
      return this.users
  }
  @Query(()=>User)
  async getUser(id:number):Promise<User>{
      const user:User = prisma.user.findUnique({where:{id:id}})
      return user;
  }

}