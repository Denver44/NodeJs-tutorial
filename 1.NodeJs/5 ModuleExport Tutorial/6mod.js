console.log("This is Module");

function average(arr) {
    let sum = 0
    arr.forEach(element => {
        sum += element
    });

    return sum / arr.length;

}

//--------- BEST WAY--------
module.exports = {
    avg: average,
    name: "Denver",
    repo: "Denver_04"
}

//--------2nd way---------
// module.exports = average
// module.exports is also and object