import { Commit } from 'vuex';

export interface IItme {
  id: number;
  text: string;
  status: IStatus;
}

export enum IStatus {
  WILLDO = "willdo",
  DOING = "doing",
  FINISH = "finish"
}

export interface IList {
  list: IItme[]
}

export interface ICxt {
  commit:Commit,
}