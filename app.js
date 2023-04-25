// fs async patterns cleaner : PROMISE, ASYNC AWAIT
// readfile setup::: need read and write
// by adding the .promises   don't require to define them in utils
// no longer creating our own wrapper, this is easiest, clear to understand.
// used for the rest of the course
const {readFile, writeFile} = require('fs').promises;

const start = async () => {
    try{
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        //right away write the file, second arg is data, third append the text
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} ${second}`,
            { flag: 'a'}
        );
        console.log(first, second);

    } catch (error){
        console.log(error);
    }
    
}
start();