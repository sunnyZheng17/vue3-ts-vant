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
