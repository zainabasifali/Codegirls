function print(i){
    console.log(i)
}
function count(){
    for(let i=1; i<=6 ; i++){
        setTimeout(function(){
            print(i)
        },1000*i)
    }
}
count();