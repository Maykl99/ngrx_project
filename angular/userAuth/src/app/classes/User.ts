import { UserInterface } from './../interfaces/User';

export class User implements UserInterface
{
  constructor(
    public id: number,
    public name: string,
    public email: string
  ){}


}
