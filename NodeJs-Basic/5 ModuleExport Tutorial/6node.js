// To resue our own module we import our own module.
// Only average function was imported here.
// const avg = require("./6mod")
// console.log(avg([5,10,15,20,25]))

// Mutli things or imported
// we can name anytihng to the variable.
const mod = require("./6mod");
console.log(mod.avg([5, 10, 40, 50]));
console.log(mod.name);
console.log(mod.repo);
console.log(mod.repo);
