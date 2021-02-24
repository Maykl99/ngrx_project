import { filter } from 'rxjs/operators';
import { FlatInterface } from './../interfaces/Flat';

export class Flat implements FlatInterface
{
  constructor(
    public id: any,
    public title: string,
    public room: number,
    public bed: number,
    public wc: number,
    public mq: number,
    public image: string,
    public description: string
  ) {}
}
