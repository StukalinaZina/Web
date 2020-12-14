let ellipse = document.querySelector("ellipse");
let ctx = canv.getContext("2d");

function svg_ball(proc_x, proc_y, r_x, r_y) {
    ellipse.setAttribute("cx", proc_x + "px");
    ellipse.setAttribute("cy", proc_y + "px");
    ellipse.setAttribute("rx", r_x + "px");
    ellipse.setAttribute("ry", r_y + "px");
}
function canv_ball(proc_x, proc_y, r_x, r_y) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#A862CF";
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(proc_x, proc_y, r_x, r_y, 0, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    ctx.stroke();
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
