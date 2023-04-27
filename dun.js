let x= prompt("x-ийн утгыг оруул");

if (x <= 1 ){
    console.log(x, "Davaa garig");
}  else if( x >=1  && x <= 2  ) {
    console.log(x, "Mygmar garig");
}else if ( x >= 2 && x <=3 ) {
    console.log(x, "Lhagva garig");
}else if (x >=3 && x <= 4 ) {
    console.log(" Purev garig");

}else if (x >=4 && x <= 5 ) {
    console.log("Baasan garig")
}else if (x >=5 && x <= 6) {
    console.log("Bymba garig")
}else if ( x >= 6 && x <=7 ) {
    console.log(x, "Nym garig");
}else if ( x >= 7 && x <=10000 ) {~
    console.log(x, "tanii oruulsan garig burr bn dahin shalgana uu ");
}
switch (X){
    case 1:
        console.log("Даваа гариг");
    case 2:
        console.log("Мягмар гариг");
     case 3:
        console.log("Лхагва гариг");    
    case 4:
         console.log("Пүрэв гариг");
    case 5:
     console.log("Баасан гариг");        
     case 6:
        console.log("Бямба гариг"); 
    case 7:
        console.log("Ням гариг");
}