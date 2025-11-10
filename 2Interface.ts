//* interface is like type alias 
//* it is more like defining a object type
//! cant use in premitive type

type User = {
    name: string;
    age: number;
}
const user1: User = {
    name: 'John',
    age: 30
}


interface IUser {
  name: string;
  age: number;
}
const iUser1: IUser = {
  name: "John",
  age: 30,
};



type Role = {
    role: 'admin' | 'moderator' | 'user';
}
type UserWithRole = User & Role;

const user2: UserWithRole = {
    name: 'John',
    age: 30,
    role: 'admin'
}


interface IUserWithRole extends IUser {
  role: "admin" | "moderator" | "user";
}
const iUser2: IUserWithRole = {
    name: 'John',
    age: 30,
    role: 'admin'
}


//* Array
type Friends = string[];
const friends: Friends = ["John", "Jane", "Doe"];

// interface IFriends2 extends Array<string>{}
interface IFriends {
    [index: number]: string
}
const iFriends: IFriends = ["John", "Jane", "Doe"]

//* Function
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

interface IAdd {
    (a: number, b: number): number;
}
const iAdd: IAdd = (a, b) => a + b