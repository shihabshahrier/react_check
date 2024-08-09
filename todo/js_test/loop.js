const magazines = ["vogue", "elle", "cosmopolitan", "glamour"];

for (let i = 0; i < magazines.length; i++) {
  console.log(magazines[i]);
}

const obj = { a: 1, b: 2, c: 3 };

for (let x in obj) {
  console.log(obj[x]);
}   

for (let i of magazines) {
  console.log(i);
}