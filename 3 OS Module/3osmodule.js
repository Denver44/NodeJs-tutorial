const os = require("os");

// With this we can get all information of our operating system.
console.log(os.arch()); // this tell which architecture we are using.
console.log(os.freemem() / (1024 * 1024 * 1024)); //  this tell total ram memory free
console.log(os.totalmem() / (1024 * 1024 * 1024)); // this tell total ram memory
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.networkInterfaces());
console.log(os.uptime());
console.log(os.type());
