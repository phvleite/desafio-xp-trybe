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

export interface ILogin {
  email: string;
  password: string;
}

export interface IPayLoad {
  name: string;
  email: string;
}
