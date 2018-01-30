function formatTime(uptime) {

	var text = 'System uptime: ';

	if (uptime < 60) {
		return text + uptime + 'sec';
	} else if (uptime >= 60 && uptime < 3600 ) {
		return text + Math.floor((uptime / 60)) + 'min, ' + Math.floor((uptime % 60)) + 'sec';
	} else {
		return text +  Math.floor((uptime / 3600)) + 'h, ' + Math.floor((uptime % 3600 / 60)) + 'min, ' + Math.floor((uptime % 60)) + 'sec';
	}
}


exports.formatTime = formatTime;