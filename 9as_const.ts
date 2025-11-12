//* as const is more recommended than enum

const User1 = {
    Admin: 'Admin',
    Moderator: 'Moderator',
    User: 'User'
}
const UserRole = {
    Admin: 'Admin',
    Moderator: 'MODERATOR',
    User: 'User'
} as const;

/*
    typeof User1
    {
        Admin: string;,
        Moderator: string;,
        User: string;
    }


    UserRole
    {
        readonly Admin: 'Admin',
        readonly Moderator: 'Moderator',
        typeof User: 'User'
    }
    typeof UserRole
    {
        Admin: 'Admin',
        Moderator: 'Moderator',
        User: 'User'
    }
    keysof only works for type not object
    keyof typeof UserRole
    'Admin' | 'Moderator' | 'User'
*/

//? keys are set to the function and values are send to the function
//? keys and value must be same
const canAccess = (role: keyof typeof UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Moderator) {
        return true;
    }
    return false;
};

console.log(canAccess(UserRole.Admin));
console.log(canAccess(UserRole.Moderator));



//? if we want to set different value and key
const UserRole2 = {
    Admin: 'ADMIN',
    Moderator: 'MODERATOR',
    User: 'USER'
} as const;
const canAccess2 = (role: typeof UserRole2[keyof typeof UserRole2]) => {
    if(role === UserRole2.Admin || role === UserRole2.Moderator) {
        return true;
    }
    return false;
}

console.log(canAccess2(UserRole2.Admin));