console.log("Hello package is sucessfully created")
console.log(process.argv)

function Add(){
    var sum = 0 ;
    for(i=2 ; i<process.argv.length ; i++){
       sum =  sum + +process.argv[i] 
    }
    return sum
}

function Sub(){
    var sub = 0 ;
    for(i=2 ; i<process.argv.length ; i++){
        if(i == 2){
            sub =  process.argv[i] 
        }
        else{
       sub =  sub - process.argv[i] 
        }
    }
    return sub
}

function Multiply(){
    var mul = 1 ;
    for(i=2 ; i<process.argv.length ; i++){
       mul =  mul* process.argv[i] 
    }
    return mul
}

function Div(){
    var div = 1 ;
    for(i=2 ; i<process.argv.length ; i++){
        if(i == 2){
            div =  process.argv[i] 
        }
        else{
            div = div / process.argv[i]
        }
    
    }
    return div
}

var add = Add()
console.log("Addition of array elements is : "+add)
var sub = Sub()
console.log("Subtraction of array elements is : "+sub)
var mul = Multiply()
console.log("Multiplication of array elements is : "+mul)
var div = Div()
console.log("Division of array elements is : "+div)
