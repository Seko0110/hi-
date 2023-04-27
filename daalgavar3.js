let a = prompt("Эхний насыг оруул");
let b = prompt("2дахь насыг оруул");
let c = prompt("3дахь насыг оруул");
let d = prompt("4дэхь насыг оруул");
let e = prompt("5дахь насыг оруул");

if (a > b && a > c && a > d && a > e) {
  console.log("a=", a, " тоо хамгийн их");
} else if (b > a && b > c && b > d && b > e) {
  console.log("b=", b, " тоо хамгийн их");
} else if (c > a && c > b && c > d && c > e) {
  console.log("c=", c, " тоо хамгийн их");
} else if (d > a && d > c && d > b && d > e) {
  console.log("d=", d, " тоо хамгийн их");
} else if (e > a && e > c && e > d && e > b) {
  console.log("e=", e, "хамгийн их нас");
}