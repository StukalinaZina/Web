let canv = document.querySelector("canvas");
let width = canv.width;
let height = canv.height;

let r = 60;
let speed = 150;
let boost = 400;
let start_x = r;
let start_y = height - r;
let s_x = width - start_x;
let fall_t = Math.sqrt(2*start_y/boost);
let fall_x = fall_t*speed;

let ellipse = document.querySelector("ellipse");
let context = canv.getContext("2d");

function x(progress) {
    return start_x + s_x*progress;
}
function y(x){
    let fall_i = Math.floor((x - start_x)/fall_x);
	let dir = 0;
    if(fall_i % 2 === 0){
		dir = fall_i;
	} 
    else {
		dir = fall_i + 1;
	}
    return height - start_y + boost/(2*(speed)**2)*(x - (start_x + dir*fall_x))**2;
}

function svg_ball(proc_x, proc_y, r_x, r_y) {
    ellipse.setAttribute("cx", proc_x + "px");
    ellipse.setAttribute("cy", proc_y + "px");
    ellipse.setAttribute("rx", r_x + "px");
    ellipse.setAttribute("ry", r_y + "px");
}
function canv_ball(proc_x, proc_y, r_x, r_y) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#A862CF";
    context.save();
    context.beginPath();
    context.ellipse(proc_x, proc_y, r_x, r_y, 0, 0, 2*Math.PI);
    context.fill();
    context.closePath();
    context.restore();
    context.stroke();
}

function compression(y){
	let h = height - y; 
	if(h < r*3/4){
		coef = 0.75;
		}
	else 
		if(h < r){
			coef = h/r;
		}
		else{
			coef = 1;
		}
   return coef;
}

function draw(progress) {
    let current_x = x(progress)
    let current_y = y(current_x);
    let inversed_y = 600 - current_y;   
    let coef;
    let r_x = r/compression(current_y);
    let r_y = r*compression(current_y);

    svg_ball(current_x, current_y, r_x, r_y);
    canv_ball(current_x, current_y, r_x, r_y);
}

function animation1({duration, draw, timing}){
    let start = performance.now();

    requestAnimationFrame(function animation1(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction)

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animation1);
        }
    });
}

animation1({
        duration: 8000,
        timing: function timing(timeFraction) {
                return timeFraction;
                },
        draw: draw
    });
