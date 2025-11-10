//* Type Assertion -> mean to tell the compiler that i am sure about the type
//* only use when you are absolutely sure about the type

let anything: any;
anything = 22;
// anything.       //? doesnt recommend any method

// (anything as number).   //* recommend number methoods


const kgToGM = (kg: number | string) => {
    if(typeof kg === 'number'){
        return kg * 1000;
    }
    if(typeof kg === 'string'){
        const numKG = kg.split(' ')[0];
        return 'Number is ' + Number(numKG) * 1000;
    }
}

const result1 = kgToGM(23) as number;      
const result2 = kgToGM('23 kg');           //? string | number | undefined
console.log(result1, result2);

// result2.   //? doesnt recommend any method 
// result1.   //? recommend number methoods


type CustomError = {
    code: number;
    message: string;
}
try {
    
} catch (error) {
    console.log(error.message);        // doesnt recommend any method
    console.log((error as CustomError).message);
}




