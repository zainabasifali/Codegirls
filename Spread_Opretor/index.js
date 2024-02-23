//Sample arrays
const arr1 = ["abs","huy","idh","oiy"];
const arr2 = [786,2452,564,23,67,22,56];
const arr3 = ["%","*","$","@","#","(",")","^"];

//Messages
var message1 = "I am going to call you tonight 11";
var message2 = "We are going to hide something tonight , be ready";
var message3 = "We will meet tomorrow at 5:00";

// Function for Encoding Messages
function encode_message(message){
    const encode = [...(arr1.slice(0, message.length / 15)), ...arr3,...(arr2.slice(0,message.length/12))];
    return encode
}

//Printing Encoded Messages
console.log("Encode message for Message1 "+message1+" is : "+encode_message(message1).join(""))
console.log("Encode message for Message2 "+message2+" is : "+encode_message(message2).join(""))
console.log("Encode message for Message3 "+message3+" is : "+encode_message(message3).join(""))
 
