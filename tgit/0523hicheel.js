let $hour = document.getElementById("hour");
let $minutes = document.getElementById("minutes");
let $seconds = document.getElementById("seconds");
 /*
 javahelinii undsey punkts 

 
 */


setInterval(() => {
   let date = new Date();

  

   let hour  = date.getHours();

   
   let minutes = date.getMinutes();
  
   let seconds  = date.getSeconds();


   console.log(hour + ":" + minutes + ":" + seconds );
   
    $hour.innerHTML = hour;
    $minutes.innerHTML = minutes;

    if (seconds < 10) {
    $seconds.innerHTML = `0${seconds} seconds`;    
    } else {
        $seconds.innerHTML = `${seconds} seconds`;    
    }



}, 1000);
















// Math.floor();
// Math.round();
// Math.random();
// setTimeout(() => {

// }, timeout);
// setInterval(() => {

// }, interval);