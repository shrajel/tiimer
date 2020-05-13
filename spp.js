var z= prompt("Enter the date for which you want to set the timer (formaT Dec7,2020 11:00:00) ");
var y=setInterval(function(){
    var x= new Date(z).getTime();
    var now= new Date().getTime();
    var diff= x-now;
    var days= Math.floor(diff/ (1000*60*60*24));
    console.log(days);
    var hours= Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    console.log(hours);
    var min=Math.floor((diff%(1000*60*60))/(1000*60));
    console.log(min);
    var sec=Math.floor((diff%(1000*60))/1000);
    console.log(sec);
    document.getElementById("demo").innerHTML= days +"d," + hours + "hrs:" + min + "m :" +sec + "s"
    },1000);