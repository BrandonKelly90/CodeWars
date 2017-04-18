function dayPlan (hours, tasks, duration){
  var schedule = [];
  var minAvailToWork = hours * 60;
  var taskTimeNeeded = tasks * duration;

  if (taskTimeNeeded <= minAvailToWork) {
    var breakTime = Math.round((minAvailToWork - taskTimeNeeded) / (tasks - 1));

    for (var i = 1; i < tasks ; i++) {
      schedule.push(duration);
      schedule.push(breakTime);
      if (tasks - i === 1) {
        schedule.push(duration);
      }
    }
  }
  else {
    schedule = "You're not sleeping tonight!";
  }
  return schedule;
}
