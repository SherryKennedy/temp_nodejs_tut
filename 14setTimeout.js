// setTimeout example
// started operationg system process
console.log('first');
// even with 0 as timeout will offload this
setTimeout(() =>{
    console.log('second');
},0)
console.log('third');
// completed and exited operating system process
/*
first
third
second
*/
// set timeout is async so offloaded, back of the line
// done with immediate code , then callback.
