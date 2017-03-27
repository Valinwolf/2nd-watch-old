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
	var hour = date.getHours();
	if(hour == 0){hour=12;}else if(hour > 12){hour-=12;}
	return [[hour, AddZero(date.getMinutes()), AddZero(date.getSeconds())].join(":"), date.getHours() >= 12 ? "PM" : "AM"].join(" ");
}

rocky.on('draw', function(e){
	var ctx = e.context;
	var cliH = ctx.canvas.clientHeight;
	var cliW = ctx.canvas.clientWidth;
	var bgH = ctx.canvas.unobstructedHeight;
	var bgW = ctx.canvas.unobstructedWidth;
	var d = new Date();
	var date = formatDate(d);
	var time = formatTime(d);
	ctx.clearRect(0,0,cliW,cliH);
	ctx.lineWidth = 5;

	ctx.strokeStyle = 'green';
	ctx.strokeRect(0,0,bgW,bgH);

	ctx.strokeStyle = 'darkgreen';
	ctx.strokeRect(10,10,bgW-20,bgH-20);
	
	ctx.textAlign = 'center';
	ctx.fillStyle = 'white';
	
	// Time
	ctx.font = '26px bold Leco-numbers-am-pm';
	ctx.fillText(time, bgW / 2,30,bgW-10);
	
	// Date
	ctx.font = '18px Gothic';
	ctx.fillText(date, bgW / 2,bgH-40,bgW-10);
});

rocky.on('secondchange', function(e){
	rocky.requestDraw();
});
