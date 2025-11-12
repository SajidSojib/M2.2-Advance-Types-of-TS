//* keysof: types operator
//* keys are always string

type Rich ={
    car: string;
    bike: string;
    cng: boolean;
}
type Poor = 'car' | 'bike' | 'cng';
type Poor2 = keyof Rich;        //? 'car' | 'bike' | 'cng'

const myVehicle: Poor = 'cng';
const myVehicle2: Poor = 'scooter';     //! error

const myVehicle3: Poor2 = 'cng';
const myVehicle4: Poor2 = 'scooter';



type User = {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    }
}
type UserKeys = keyof User;      //? 'name' | 'age' | 'address'
type UserKeys2 = keyof User['address'];   //? 'city' | 'country'



const user : User = {
    name: 'John',
    age: 30,
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}
const getProperty = (obj: User, key: string) => {
    return obj[key];
}
console.log(getProperty(user, 'name'));     //? 'John'
console.log(getProperty(user, 'job'));      //* no error


const getProperty2 = (obj: User, key: 'name' | 'age' | 'address' ) => {
    return obj[key];
}
console.log(getProperty2(user, 'name'));     
console.log(getProperty2(user, 'job'));      //! error


const house = {
    length: 100,
    width: 200
}
const getProperty3 = (obj: User, key: keyof User) => {      //! only usable for User
  return obj[key];
};
console.log(getProperty3(user, 'name'));     
console.log(getProperty3(user, 'job')); 
console.log(getProperty3(house,'width')); 


const getProperty4 = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
}; 
console.log(getProperty4(user, 'name'));     
console.log(getProperty4(user, 'job'));
console.log(getProperty4(house, 'width'));       //* usable for any object