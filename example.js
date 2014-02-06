var montecarlo = require('./index.js');

var pi = 0,
	data = [];
for(var i = 1; pi != Math.PI; i++) {
	data.push(4 * montecarlo.calculateRatio(i));
	var sum = 0;
	for(var j = 0; j < data.length; j++) {
		sum += data[j];
	}
	pi = sum / data.length;
	var percent = (Math.PI / pi) * 100;
	if (percent > 100) {
		percent = 100 + (100 - percent);
	}
	console.log(i + "|      |" + pi + "|      |" + percent + "%");
}