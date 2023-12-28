var butt = document.getElementById("bt1")
butt.addEventListener("click", myfunction());

function myfunction(){
var amount = parseInt(prompt("Enter your amount"));
// Five thousand note calculation and remainder
var F_T_N_C = Math.trunc(amount / 5000);
var F_T_N_C_R = amount % 5000;
// Thousand note calculation and remainder
var Th_N_C = Math.trunc(F_T_N_C_R / 1000);
var Th_N_C_R = amount % 1000;
// Five hundred note calculation and remainder
var F_H_N_C = Math.trunc(Th_N_C_R / 500);
var F_H_N_C_R = amount % 500;
// Hundred note calculation 
var H_N_C = Math.trunc(F_H_N_C_R / 100);
var H_N_C_R = amount % 100;
// fifty note calculation 
var F_N_C = Math.trunc(H_N_C_R / 50);
var F_N_C_R = amount % 50;
// twenty note calculation 
var T_N_C = Math.trunc(F_N_C_R / 20);
var T_N_C_R = amount % 20;

if (amount < 0) {
    document.write("Amount is in a negitive number")
}
else if (amount < 10) {
    document.write("You have the amount less than ten so no notes available")
}
else {
    document.write("You will be recieving your amount in the following way" + "<br>")
    document.write(F_T_N_C + " x 5000" + "<br>");
    document.write(Th_N_C + " x 1000" + "<br>");
    document.write(F_H_N_C + " x 500" + "<br>");
    document.write(H_N_C + " x 100" + "<br>");
    document.write(F_N_C + " x 50" + "<br>");
    document.write(T_N_C + " x 20" + "<br>");
}
}