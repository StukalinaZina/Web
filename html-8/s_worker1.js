import occasion from "./occasion.js";

self.onconnect = function(event){
   let port = event.ports[0];
   port.addEventListener("message", () => {
        let sms = occasion.call(self);
		let x = new Date();
        let new_time = "is " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();;
        port.postMessage({mes: sms, S_time: new_time});
    });
    port.start();
}