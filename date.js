// Get current date time
function dateNow() {
  return new Date().toUTCString();
};

// Add seconds, minutes, hours, days, months and years to current date time
// Usage: dateAdd(3, "m")
// |__ Added 3 months to the current date
function dateAdd(time = 0, type = "s") {
  date = new Date();
  if (type === "s") date.setSeconds(date.getSeconds() + time);
  if (type === "i") date.setMinutes(date.getMinutes() + time);
  if (type === "h") date.setHours(date.getHours() + time);
  if (type === "d") date.setDate(date.getDate() + time);
  if (type === "m") date.setMonth(date.getMonth() + time);
  if (type === "y") date.setFullYear(date.getFullYear() + time);
  return date.toUTCString();
};
