export interface IUser {
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  presentAddress: string;
  permanentAddress: string;
  profession: string;
}
