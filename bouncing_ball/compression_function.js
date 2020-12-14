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
let fall_x = fall_t *speed;

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