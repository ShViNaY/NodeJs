const {readFile} = require('fs')

console.log('Started a first task');
//check the file path
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('Completed the first task');
    
    
})
console.log('Starting next task');

//started operating system process
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0)
console.log('third');
//completed and exited operating system process 
// ans - first, third, second