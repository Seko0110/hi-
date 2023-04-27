let a = prompt("Эхний насыг оруул");
let b = prompt("2дахь насыг оруул");
let c = prompt("3дахь насыг оруул");
let d = prompt("4дэхь насыг оруул");
let e = prompt("5дахь насыг оруул");
console.log(typeof a);
a=a*1;
b=b*1;
c=c*1;
d=d*1;
e=e*1;

if (a < b && a < c && a < d && a < e) {
  console.log("a=", a, " Хамгийн бага нас");
} else if (b < a && b < c && b < d && b < e) {
  console.log("b=", b, " Хамгийн бага нас");
} else if (c < a && c < b && c < d && c < e) {
  console.log("c=", c, " Хамгийн бага нас");
} else if (d < a && d < c && d < b && d < e) {
  console.log("d=", d, " Хамгийн бага нас");
} else if (e < a && e < c && e < d && e < b) {
  console.log("e=", e, "хамгийн бага нас");
} 