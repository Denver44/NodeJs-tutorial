const EvenEmitter = require("events"); // Using this module we can Create,fire & listen for our own events.
const event = new EvenEmitter(); // now we have create a object now we can use all function.



event.on("sayMyName", () => {
  console.log("Your name is Denver");
});

// we can call multiple function with same name
event.on("sayMyName", () => {
  console.log("Your name is Denver");
});

event.on("sayMyName", () => {
  console.log("Your name is Creed");
});

event.on("CheckMyPage", (code, msg) => {
  console.log(`Your page status is ${code} and it is ${msg}`);
});

event.emit("sayMyName"); // first define then emit the Event.
event.emit("CheckMyPage", 200, "ok"); // this way we pass the args in th event.
