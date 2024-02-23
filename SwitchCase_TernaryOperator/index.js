// Switch case with multiple cases and works when two statements gets true
function class_confirm_switch(day,sub){   
    switch(true){
        case(day == "Mon" && sub == "Maths"):
            console.log("Algebra Day");
            break;
        case(day == "Mon" && sub == "Eng"):
                console.log("Synonyms Day");
                break;
        case(day == "Mon" && sub == "Science"):
                    console.log("Human body Day");
                    break;
        default:
            console.log("Not verified")
    }

}

//Three nested ternary operators , comment two and check while running one , so as to get a clear output
function class_confirm_ternary(day,sub){
day == "Mon" ? (sub == "Maths" ?  console.log("Algebra Day"):console.log("Not verfied for maths")) : console.log("Not verified for maths")
day == "Mon" ? (sub == "Science" ?  console.log("Human body day"):console.log("Not verfied for science")) : console.log("Not verified for science")
day == "Mon" ? (sub == "Eng" ?  console.log("Synonyms Day"):console.log("Not verfied for english")) : console.log("Not verified for english")
}

//Calling function
console.log("For Switch:")
class_confirm_switch("Mon","Maths")
console.log("\n")

console.log("For Ternary:")
class_confirm_ternary("Mon","Maths")
console.log("\n")