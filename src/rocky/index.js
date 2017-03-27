var rocky = require('rocky');

rocky.on('draw', function(e){
	var ctx = e.context;
	var cliH = ctx.canvas.clientHeight;
	var cliW = ctx.canvas.clientWidth;
	var bgH = ctx.canvas.unobstructedHeight;
	var bgW = ctx.canvas.unobstructedWidth;
	var dim;
	var d = new Date();
	var date = d.toLocaleDateString();
	var time = d.toLocaleTimeString();
	ctx.clearRect(0,0,cliW,cliH);
	ctx.lineWidth = 10;
	
	// Red
	//ctx.strokeStyle = 'red';
	//ctx.strokeRect(0,0,bgW,bgH);
	
	// White
	//ctx.strokeStyle = 'white';
	//ctx.strokeRect(10,10,bgW-20,bgH-20);
	
	// Blue
	//ctx.strokeStyle = 'blue';
	//ctx.strokeRect(20,20,bgW-40,bgH-40);
	
	ctx.textAlign = 'center';
	
	// Time
	ctx.font = '30px bolder Bitham';
	dim = ctx.measureText(time);
	ctx.fillText(time, bgW / 2 - dim.width / 2,45,bgW);
	
	// Date
	ctx.font = '18px Gothic';
	dim = ctx.measureText(date);
	ctx.fillText(date, bgW / 2 - dim.width / 2,76,bgW);
	
	
});

rocky.on('secondchange', function(e){
	rocky.requestDraw();
});
