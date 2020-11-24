addEventListener("message",(event) => {
    let line = "Occasion w" + String(this);
	let sum = 0;
	let n = event.data;
    for (let i = 1; i < n; i++){ 
		sum += (-1)**i / (2*i + 1);
    }
    let myPI = 4*sum;
	let mes = line + Math.round1000(myPI);
    postMessage(mes);
});
