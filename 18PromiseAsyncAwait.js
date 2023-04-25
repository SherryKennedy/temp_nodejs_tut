// fs async patterns : PROMISE, ASYNC AWAIT
// readfile setup::: for 4. need read and write
// created own wrapper, 19 is better, but this explains how to get to file 19
const {readFile, writeFile} = require('fs');
//5. clean up even more: don't need all of the util, ask in first line see next js file
//4.
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// above passes in the getText function that we did, but through utils has it coded 
const start = async () => {
    try{
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        //right away write the file, second arg is data
        await writeFilePromise('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first} ${second}`);
        console.log(first, second);

    } catch (error){
        console.log(error)
    }
    
}
start();



// now can invoke getText
//2. & 3.
// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         //two callback functions, place readfile in here and change a bit
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }
//2. promise resolved 
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err)=> console.log(err))

//test by making correct/incorrect path and should see error
// can make cleaner with async / await
// still a pain, just by using the promise when want severlal different reads and writes

// add in async await, once promise resolved then get response
//3.
// const start = async () => {
//     try{
//         const first = await getText('./content/first.txt');
//         const second = await getText('./content/second.txt');
//         // previously setup callbacks, now just waiting for promise to resolve, once resolved, then can do something with the value
//         //everytime async await approach, use try catch block to have some control
//         console.log(first);
//     } catch (error){
//         console.log(error)
//     }
    
// }
// have function start, need to invoke
//start();

//4. setup code with out the wrapping function of getText
// getText will read but what about the write, need this better.
// in node there is a module named util



// know readFile is async. (cmd k + cmd c , comments large bits of code)
//1.
// readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err){
//         return;
//     }else{
//         console.log(data);
//     }
// })
// problem if multiple action (read 2 files and then write one), better solution
// turn into a promise and then async await
// create a new function called get text


