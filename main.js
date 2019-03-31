const add = require('./add');

try {
  console.log(`1 + 1 = ${add(1, 1)}`)
}
catch (err) {
  console.error(err.toString());
}
