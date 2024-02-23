import{Logged} from './day5.js'
function make_changes(){
    process.stdin.setEncoding('utf8');
    console.log('Please enter your name: ');
    process.stdin.on('data', (input) => {
        const name = input.trim();
        console.log(Logged(name)+ " Logged Sucessfully");
    })
}
make_changes();
