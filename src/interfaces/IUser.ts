export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface INewUser {
  name: string;
  email: string;
  password: string;
}

export interface IValidateUserId {
  id: number;
}
