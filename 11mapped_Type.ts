const arrOfNumbers: number[] = [1, 2, 3, 4, 5];
const arrOfStrings: string[] = ['a', 'b', 'c', 'd', 'e'];

const arrOfStringUsingMap : string[]= arrOfNumbers.map((num) => num.toString());
console.log(arrOfStringUsingMap);   // ['1', '2', '3', '4', '5']


type AreaOfNum ={
    height: number;
    width: number;
}
type height = AreaOfNum['height']       //? type of height is number


// type AreaOfStr = {
//   height: string;
//   width: string;
// };
type AreaOfStr = {
  [key in 'height' | 'width']: string
}
type AreaOfStr2 = {
  [key in keyof AreaOfNum]: string
}


type AnyObjToString <T>= {
  [key in keyof T]: string
}
type VolumeInString = AnyObjToString<{height: number; width: number, length: number}>


type AnyObj <T>={
    [key in keyof T]: T[key]
} 
type Volume = AnyObj<{height: number; width: string, length: boolean}>
const volume: AnyObj<Volume> = {
    height: 10,
    width: '10',
    length: true
}