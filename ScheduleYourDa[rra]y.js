function dayPlan (hours, tasks, duration){
	var schedule = [];
	var minAvailToWork = hours * 60;
	var taskTimeNeeded = tasks * duration;

	if (taskTimeNeeded > minAvailToWork) {
		schedule = "You're not sleeping tonight!";
	}
	else {
		var breakTime = Math.round((minAvailToWork - taskTimeNeeded) / (tasks -1));
		var workOrBreak = duration;

		for (var i = 1; i < (tasks * 2); i++) {
			schedule.push(workOrBreak);
			if (i % 2 === 0) {
				workOrBreak = duration;
			}
			else {
				workOrBreak = breakTime;
			}
		}
	}
	return schedule;
}
