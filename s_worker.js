onconnect = function(event){
   let port = event.ports[0];
   port.addEventListener("message", () => {
        let sms = "Occasion sw" + String(this);
		let x = new Date();
        let new_time = "Time is" + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
		mes = sms + new_time;
        port.postMessage(mes);
    });
    port.start();
}