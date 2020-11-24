import {calc_Pi} from "./calc_Pi.js"
import occasion from "./occasion.js";

addEventListener("message", (event) => {
    let line = occasion.call(self);
    let myPI = calc_Pi(event.data['n']);
    postMessage({mes: line, count: myPI});
});
