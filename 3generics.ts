// dinamically generalize

type FD = string[];
const friends:FD = ['abir','babor','chatur']
const friends2:string[] = ['abir','babor','chatur']
const friends3:Array<string> = ['abir','babor','chatur']

type ID = number[];
const ids:ID = [1,2,3,4]
const ids2:number[] = [1,2,3,4]
const ids3:Array<number> = [1,2,3,4]

type BooleanArray = boolean[];
const friends4:BooleanArray = [true,false,true]
const friends5:Array<boolean> = [true,false,true]


// generic -> like function it takes value and return value
type Generic = Array<string>;
const friends6:Generic = ['abir','babor','chatur']
const friends7:Generic = [1,2,3,4]

type Generic2<T> = Array<T>;
const friends8:Generic2<string> = ['abir','babor','chatur']
const friends9:Generic2<number> = [1,2,3,4]


// generic as tuple
type Coordinate = [number, number];
const c1: Coordinate = [10, 20];
const c2: Coordinate = ['30', '40'];

type Generic3<X,Y> = [X,Y];
const c3:Generic3<string, number> = ['10', 20];
const c4:Generic3<number, string> = [10, '20'];


// generic as array of object
type Generic4<T> = Array<T>;
const user1:Generic4<object> = [
    {name: 'abir', age: 20}, 
    {id: 2}, 
    {name: 'chatur', age: '40'}
];
type User = {name: string, age: number};
const user2:Generic4<User> = [
    {name: 'abir', age: 20}, 
    {id: 2}, 
    {name: 'chatur', age: '40'}
];