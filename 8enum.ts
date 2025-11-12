//* enum: used to define a set of named constants
//* it is used to represent a group of related values
//* not recommended to use enum

type UserRole = 'Admin' | 'Moderator' | 'User';

const canAccess = (role: UserRole) => {
    if(role === 'Admin' || role === 'Moderator') {
        return true;
    }
    return false;
};

console.log(canAccess('Admin'));
// console.log(canAccess('admin'));        //!error can do mistakes



enum UserRole2 {
    Admin = 'admin',
    Moderator = 'moderator',
    User = 'user'
}

const canAccess2 = (role: UserRole2) => {
    if(role === UserRole2.Admin || role === UserRole2.Moderator) {
        return true;
    }
    return false;
}

console.log(canAccess2(UserRole2.Admin));