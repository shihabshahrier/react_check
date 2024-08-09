let a = 1;
try {
    console.log(a / 0);
}
catch (err) {
    throw new Error("This is an error");
}

finally {
    console.log("Finally block executed");
}
// let a = 10;
// if (a == "10") {
//     console.log("True");
// }