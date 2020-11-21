const dateHelper = require("../helpers/date");

// Get now
console.log(dateHelper.now());

// Add 7 days
console.log(dateHelper.add(7, "d"));

// Add 3 months
console.log(dateHelper.add(3, "m"));

// Add 2 year
console.log(dateHelper.add(2, "y"));
