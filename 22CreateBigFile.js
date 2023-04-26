// STREAMS  :: INtRO, example: Writing a big file
// Writeable
// Readable
// Duplex
// Transform
//(3hr:26min:40sec into video)

/*
Keep simple: streams are used to read or write sequentially. Basically when read in from continuous source or a big pile; streams come in handy. 4 different types of streams:
1. Writeable: used to write data sequentially,
2. Readable: used to read data sequentially
3. Duplex: used to both read and write data sequentially
4. Transform: Data can be modified when writing or reading. 

Just like in events, many modules are used to implement streaming. 
Streams extend the event emitter file.
Whick means that we can use events like, 'data' and 'on' on streams.
 
-Advanced topic in node. Try to keep short and sweet with examples of streams so one can get main ideal. 
*/

// read stream options
// (compared to other stream read did)
// we want to create/write a big file

const {writeFileSync} = require('fs');

for (let i=0; i<10000; i++){
    writeFileSync('./content/big.txt',
                   `hello world ${i}\n`, 
                   { flag: 'a'});
}



