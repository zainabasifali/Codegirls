const person = [{id:1,name:"Zainab",age:19,gender:"Female"},{id:2,name:"Zara",age:20,gender:"Female"},{id:3,name:"Abeera",age:30,gender:"Female"},{id:4,name:"Sabiha",age:21,gender:"Female"},{id:5,name:"Marukh",age:39,gender:"Female"}];

let s = {salary:function(salary,id){
for(i=0 ; i<person.length ; i++){
    if(id == person[i].id){
        person[i].salary = salary;
        console.log("The Id of the person is "+person[i].id)
        console.log("The Name of the person is "+person[i].name)
        console.log("The Salary of the person is "+person[i].salary)
        console.log("\n")
    }
}
}
}

person.__proto__ = s;

person.salary(200000,1);
person.salary(55000,2);
person.salary(35000,3);
person.salary(100000,4);
person.salary(870000,5);




