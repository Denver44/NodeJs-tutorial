const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const avg = (arr) => {
  let sum = 0
  arr.forEach(element => {
    sum += element
  });
  return sum / arr.length;
}

module.exports = {
  addition: add,
  subtraction: sub,
  multiply: mul,
  divide: div,
  average: avg,
  name: "Denver",
  repo: "maths helper library",
}
// or
// module.exports = { add, sub, mul, div, avg };

//--------2nd way---------
// module.exports = average
// module.exports is also and object