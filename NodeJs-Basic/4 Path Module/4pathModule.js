const path = require("path");

console.log(path.dirname("D:/Web DevelopmentNodeTutorial/4pathModule.js")); // this gives directory name
console.log(path.extname("D:/Web DevelopmentNodeTutorial/4pathModule.js")); // this give file extension name
console.log(path.basename("D:/Web DevelopmentNodeTutorial/4pathModule.js")); // this give the filename with extension
console.log(path.parse("D:/Web DevelopmentNodeTutorial/4pathModule.js")); // this will give all above information in a object form.
