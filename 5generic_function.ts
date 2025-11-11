//* Normal function

const createArrayOfString = (value:string) : string[] => [value]
const createArrayOfNumber = (value:number) : number[] => [value]
const createArrayOfObject = (value:{id:number, name:string}) => [value]

console.log(createArrayOfString('Apple'));
console.log(createArrayOfNumber(123));
console.log(createArrayOfObject({id:1, name:'John'}));


//* Generic function
const createArrWithGeneric = <T>(value:T) : T[] => [value]
console.log(createArrWithGeneric('Apple'));
console.log(createArrWithGeneric(123));
console.log(createArrWithGeneric({id:1, name:'John'}));


//* Tuple with normal function
const createTuple = (value:string, value2:number) : [string, number] => [value, value2]
console.log(createTuple('Apple', 123));
console.log(createTuple(123, 'Apple'));
console.log(createTuple({id:1, name:'John'}, 123));


//* Tuple with generic
const createTupleWithGeneric = <X, Y>(value:X, value2:Y) : [X, Y] => [value, value2]
console.log(createTupleWithGeneric('Apple', 123));
console.log(createTupleWithGeneric(123, 'Apple'));
console.log(createTupleWithGeneric({id:1, name:'John'}, 123));