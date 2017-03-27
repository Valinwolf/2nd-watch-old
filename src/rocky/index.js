var rocky = require('rocky');

function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

function formatDate(date) {
	var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	return days[date.getDay()] + ', ' + monthNames[date.getMonth()] + ' ' + date.getDate();
}

function formatTime(date) {
	return [[AddZero(date.getHours()), AddZero(date.getMinutes())].join(":"), date.getHours() >= 12 ? "PM" : "AM"].join(" ");
}

rocky.on('draw', function(e){
	var ctx = e.context;
	var cliH = ctx.canvas.clientHeight;
	var cliW = ctx.canvas.clientWidth;
	var bgH = ctx.canvas.unobstructedHeight;
	var bgW = ctx.canvas.unobstructedWidth;
	var dim;
	var d = new Date();
	var date = formatDate(d);
	var time = formatTime(d);
	ctx.clearRect(0,0,cliW,cliH);
	ctx.lineWidth = 5;
	
	// Red
	ctx.strokeStyle = 'red';
	ctx.strokeRect(0,0,bgW,bgH);
	
	// White
	ctx.strokeStyle = 'white';
	ctx.strokeRect(5,5,bgW-5,bgH-5);
	
	// Blue
	ctx.strokeStyle = 'blue';
	ctx.strokeRect(10,10,bgW-10,bgH-10);
	
	ctx.textAlign = 'center';
	
	// Time
	ctx.font = '30px bolder Bitham';
	dim = ctx.measureText(time);
	ctx.fillText(time, bgW / 2,15,bgW-15);
	
	// Date
	ctx.font = '18px Gothic';
	dim = ctx.measureText(date);
	ctx.fillText(date, bgW / 2,50,bgW-15);
	
	
});

rocky.on('secondchange', function(e){
	rocky.requestDraw();
});
