let j_obj ='[{"Name":"Zainab","Father":"Asif","Class":10,"Percentage":96,"Gender":"Female"},{"Name":"Zara","Father":"Asif","Class":11,"Percentage":86,"Gender":"Female"},{"Name":"Shaheen","Father":"Asif","Class":10,"Percentage":66,"Gender":"Female"},{"Name":"Liza","Father":"Asif","Class":10,"Percentage":76,"Gender":"Female"},{"Name":"Hur","Father":"Asif","Class":11,"Percentage":72,"Gender":"Male"},{"Name":"Abass","Father":"Asif","Class":10,"Percentage":65,"Gender":"Male"}]'

let array = JSON.parse(j_obj)

//Name sorting(sort())
console.log("Sorted Names of students in accending order : ")
let sort_names = array.sort(function(a, b) {
  return a.Name.localeCompare(b.Name);
}).map(function(e){
  console.log(e.Name);
})
console.log("\n")

//Filtering class 10 students(filter() and map())
console.log("Students of class 10 are : ")
let class_fil = array.filter(function(e){
  return e.Class == 10;
})
class_fil.map(function(e){ console.log(e.Name)})
console.log("\n")

//Passing check(every())
console.log("Passing Ratio : ")
let pass = array.every(function(e){
  return e.Percentage > 50
})
pass == true ? console.log("Every student is pass") : console.log("Every student is not pass")
console.log("\n")

//Checking does male exsist in class 10(some())
console.log("Male Check : ")
let gender = array.some(function(e){
  return (e.Gender == "Male" && e.Class == 10)
})
gender == true ? console.log("Some males exist in class 10") : console.log("All Females in class 10")
console.log("\n")

//Average of all Percentages(reduce())
console.log("Average of all percentages : ")
let sum = array.reduce(function(a,c){
     return a + c.Percentage;
},0)
let avg = sum / array.length
console.log(avg)
console.log("\n")

//Find a student whose name is Zainab(find())
console.log("Details of Zainab : ")
let name_found = array.find(function(e){
  return e.Name == "Zainab"
})
console.log(name_found)
console.log("\n")

