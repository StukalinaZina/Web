import occasion from './occasion.js';

let newP_start = document.createElement("p");
newP_start.innerHTML = "start script";
document.body.appendChild(newP_start);

let newP2 = document.createElement("p");
newP2.innerHTML = occasion.call(self);
document.body.appendChild(newP2);

let w1 = new Worker("worker1.js", {type: "module"});
w1.postMessage({n: 4});
w1.addEventListener("message",(event) => {
    let newP3 = document.createElement("p");
    newP3.innerHTML = event.data['mes'] + ". w1 pi = " + event.data['count'];
    document.body.appendChild(newP3);
});

//w1.postMessage({n: 4}); 

let w2 = new Worker("worker1.js", {type: "module"});
w2.postMessage({n: 64});
w2.addEventListener("message",(event) => {
    let newP4 = document.createElement("p");
    newP4.innerHTML = event.data['mes'] + ". w2 pi = " + event.data['count'];
    document.body.appendChild(newP4);
});

//w2.postMessage({n: 64}); 

let sw = new SharedWorker("s_worker1.js", {type: "module"});

sw.port.addEventListener("message", event => {
      let newP5 = document.createElement("p");
      newP5.innerHTML = event.data['mes'] + ". sw time " + event.data['S_time'];
      document.body.appendChild(newP5);
    });

let pNum = document.getElementById('timer');
pNum.onclick = function(event) {
   sw.port.postMessage('time');
  };
  
sw.port.start();

let newP_end = document.createElement("p");
newP_end.innerHTML = "end script";
document.body.appendChild(newP_end);

export default function(){
    return 'On script';
}