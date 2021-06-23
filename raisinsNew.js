const raisinAlarm = function(cookie) {
  for (let item of cookie) {
    if (item === "🍇") {
      return "Raisins Alert!"
    }
  }
  return "All good"
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



const raisinAlarmArray = function(cookies) {
  let raisins = [];
  for (let i = 0; i < cookies.length; i++) {
    raisins.push(raisinAlarm(cookies[i]));
  }
  return raisins;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));