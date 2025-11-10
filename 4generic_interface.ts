interface Developer<T>{
    name: string,
    experience: number,
    laptop:{
        name: string,
        price: number,
    }
    job:T;    
}

const developer1: Developer<string> = {
    name: 'Sajid',
    experience: 1,
    laptop: {
        name: 'Asus',
        price: 50000
    },
    job: 'unemployed'
}
const developer2: Developer<{title: string, salary: number}> = {
    name: 'Sajid',
    experience: 1,
    laptop: {
        name: 'Asus',
        price: 50000
    },
    job: {
        title: 'Web Developer',
        salary: 15500
    }
}



interface Developer2<T, X> {
  name: string;
  experience: number;
  job: T;
  bike?: X;
}
const developer3: Developer2<{title: string, salary: number}> = {
    name: 'Sajid',
    experience: 1,
    job: {
        title: 'Web Developer',
        salary: 15500
    },
}

interface Developer3<T, X = null> {
  name: string;
  experience: number;
  job: T;
  bike?: X;
}
const developer4: Developer3<{title: string, salary: number}> = {
    name: 'Sajid',
    experience: 1,
    job: {
        title: 'Web Developer',
        salary: 15500
    },
}