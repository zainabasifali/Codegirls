// Question 1:
// let a = parseInt(prompt("Enter number a "))
// let b = parseInt(prompt("Enter number b "))
// document.write(a+b)

// Question 2
// let arr = [1,2,3,4]
// let sum = 0
// for(a = 0 ;a<arr.length; a++){
//      sum = sum + a
// }
// console.log(sum)

// Question 3
// let arr =[1,4,6,3,22]
// let max = 0
// for(a=0 ; a<arr.length; a++){
//   if(arr[a] > max ){
//       max = arr[a]
//   }
// }
// console.log(max)

//with reduce
// let arr =[1,4,6,3,22]
// const max = arr.reduce((accumulator, currentValue) => {
//     return currentValue > accumulator ? currentValue : accumulator;
// }, 0);
// console.log(`Maximum number is ${max}`); 

// Question 4
// let arr =[1,4,6,3,22]
// let min
// for(a=0 ; a<arr.length; a++){
//     min = arr[0]
//   if(arr[a] < min){
//       min = arr[a]
//   }
// }
// console.log(min)

//with reduce
// let arr = [1, 4, 6, 3, 22];
// const min = arr.reduce((accumulator, currentValue) => {
//     return currentValue < accumulator ? currentValue : accumulator;
// }, arr[0]);
// console.log(`Minimum number is ${min}`);

// Question 5
// let temp_cel = 32;
// let temp_far = temp_cel*(9/5)+32;
// console.log(temp_far)

// temp_cel = temp_far/(9/5)-32
// console.log(temp_cel)

// Question 6
// let thought_number = 76;
// let guess_number = Math.random(100)

// if(thought_number == guess_number){
//     console.log("your number was "+ thought_number+ "it got MATCHED")
// }
// else{
//     console.log("your number was "+ thought_number+ " it didnt MATCHED")
// }

// Question 8
// let str = "Zainab"

// for(i=str.length-1 ; i>=0 ;i--){
//    console.log(str[i])
// }

// Question 11
// let str = "Mohaddissa asif"
// let vowel_count = 0
// function my_function(str){
//     for(i=0 ; i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e'||str[i] == 'i' ||str[i] == 'o' || str[i] == 'u' ){
//           vowel_count = vowel_count + 1;
//         }
//     }
//     console.log(vowel_count)
// }
// my_function(str)

// Question 13
// let str = "Zainab"

// function reverse_string(str){
//     let reverse_string = ""
//  for(i=str.length-1 ; i>=0 ;i--){
//    reverse_string = reverse_string + str[i]
// }
// return reverse_string
// }
// console.log(reverse_string(str))

// Question 14
// function even_odd(num){
//     if(num % 2 == 0){
//         return "Even"
//     }
//     else{
//         return "Odd"
//     }
// }
// console.log(even_odd(95))

// Question 15
// let arr = [45,98,3,74,2]

// function largest_number(arr){
// let max = 0
// for(a=0 ; a<arr.length; a++){
//   if(arr[a] > max ){
//       max = arr[a]
//   }
// }
// return max
// }

// console.log(largest_number(arr))