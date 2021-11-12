// the module wrapper function is done by the compiler of node for us

let a = "durgesh";
console.log(a);
// As we write this  the node compiler wrapper this all in one fuction called function wrapper
// the below function is called wrapper function
//thats why we are able to ue the require exports and module wthout importting any file module.

(function (exports, require, module, __filename, __dirname) {
  let a = "durgesh";
  console.log(a);
});

console.log(__dirname);
console.log(__filename);
