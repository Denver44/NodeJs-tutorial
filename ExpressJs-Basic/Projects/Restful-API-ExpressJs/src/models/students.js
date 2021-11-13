const mongoose = require("mongoose");
const validator = require("validator");

//2. Schema Defined
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  // phone: { type: Number, required: true, unique: true, min: 10 },
  // email: {
  //   type: String,
  //   required: true,
  //   // We can throw the error msg like this
  //   unique: [true, "Email id already present"],
  //   validate(value) {
  //     if (!validator.isEmail(value)) {
  //       throw new Error("Invalid Email");
  //     }
  //   },
  // },
  address: {
    type: String,
    required: true,
  },
});

//3. creating Model  the student is class
const Student = new mongoose.model("Student", studentSchema);
// 4. Export
module.exports = Student;
