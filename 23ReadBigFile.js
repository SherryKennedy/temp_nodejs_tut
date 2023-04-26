// STREAMS  :: INtRO, example: Reading a big file
// will use closed open and ready, ready a bit later

// Types of streams:
// Writeable
// Readable
// Duplex
// Transform


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
// wrote to big file in 22
// here read a big file, similar to fsSync and fsAsync 10 and 11 in Tutorial2
// we want to create/write a big file

// readstream is created with first line 
const {createReadStream} = require('fs');

// need tocreate the instance and invoke the read stream
// pass the path
// invoked it
//1. 
//const stream = createReadStream('./content/big.txt');

//2. add an option object that controls amount of data taken in chunks (the size of the buffer) to 90 thousand, one now has 2 console logs.
// const stream = createReadStream('./content/big.txt',
//                                 {highWaterMark:90000} );

//3. set up the endcoding now, see hello world coming from the file
const stream = createReadStream('./content/big.txt',
    {highWaterMark:90000, encoding:'utf8'});

// above will return the read stream

stream.on('data',(result)=>{
    // result is the chunk of data, everytime get this can  do something with it, our 'result' is a chunk of data
    // result.length is x bytes of data.
    console.log(result);
})

//4. error which can show err as callback function, console with err as property
stream.on('error',(err)=> console.log(err));
// test with changing the path in some way: '../content/big.txt'


// shows buffer, first 64 kb , then another 64 kb, then remainder
// this if by default
/*
<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 32 0a 68 65 6c 6c 6f 20 77 6f ... 65486 more bytes>
<Buffer 77 6f 72 6c 64 20 33 39 32 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 32 0a 68 65 6c 6c 6f ... 65486 more bytes>
<Buffer 6f 72 6c 64 20 37 37 37 35 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 36 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 37 0a 68 65 6c 6c 6f 20 ... 37768 more bytes>

// ** check in explorer/finder for big.txt: see how many kb size: 169kb
*/

// Thus reading data in chunks, by default is 64 kb. 
// everytime console log see 64kb, 64kb and eventually remainder
// sends in chunks like this.

//** instead of reading everything and putting in variable
// we are doing this in chunks automatically
// which uses the event
// Docs: nodejs Class: stream.Readable
// search for fs   the filesystem
// look for Class fs.ReadStream
// see that have the class fs.ReadStream
// see that have the class Event: 'ready'
// more classes Event: 'close'
// class  Event: 'open'

// Event extending from the stream
// everytime get the data, we can do something with it.!!!
// right now just console logging, but can do more useful things with this. 

// change the buffer size  90000:
/*
<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 32 0a 68 65 6c 6c 6f 20 77 6f ... 89950 more bytes>
<Buffer 6f 72 6c 64 20 35 33 35 39 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 35 33 36 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 35 33 36 31 0a 68 65 6c 6c 6f 20 ... 78840 more bytes>
*/
// one for 90 kb, the second is the remainder

// error in path or other:
/*
[Error: ENOENT: no such file or directory, open '../content/big.txt'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '../content/big.txt'
}
*/