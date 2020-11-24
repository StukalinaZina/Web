let newP_start = document.createElement("p");
newP_start.innerHTML = "start script";
document.body.appendChild(newP_start);

let newP2 = document.createElement("p");
newP2.innerHTML = "Occasion ms" + String(this);
document.body.appendChild(newP2);

let w1 = new Worker("C:/xampp/htdocs/worker.js");
w1.postMessage([4]);
w1.addEventListener("message",(event) => {
    let newP3 = document.createElement("p");
    newP3.innerHTML = event.data;
    document.body.appendChild(newP3);
});

//w1.postMessage([4]); 

let w2 = new Worker("C:/xampp/htdocs/worker.js");
w2.postMessage([64]); 
w2.addEventListener("message",(event) => {
    let newP4 = document.createElement("p");
    newP4.innerHTML = event.data;
    document.body.appendChild(newP4);
});

//w2.postMessage([64]); 

let sw = new SharedWorker("C:/xampp/htdocs/s_worker.js");
sw.port.start();
sw.port.addEventListener("message", event => {     
      let newP5 = document.createElement("p");
      newP5.innerHTML = event.data;
      document.body.appendChild(newP5);
    });

let pTime = document.getElementById('timer');
pTime.onclick = function(event) {
   sw.port.postMessage('time');
   };
  
//sw.port.start();

let newP_end = document.createElement("p");
newP_end.innerHTML = "end script";
document.body.appendChild(newP_end);
