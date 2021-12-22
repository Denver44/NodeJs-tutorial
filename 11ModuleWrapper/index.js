
let a = "Denver";
console.log(a);

(function (exports, require, module, __filename, __dirname) {
  let a = "Denver";
  console.log(a);
});

// The module wrapper function is done by the compiler of node for us
// As we write this the node compiler wrapper this all in one function called function wrapper.
// Then the below function is called wrapper function.
// Thats why we are able to use the require exports and module without importing any file module.



console.log(__dirname);
console.log(__filename);
