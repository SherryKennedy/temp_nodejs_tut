// npm - global command, come with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - usie it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName>  (mac) (may ask for credentials)

// mostly use the npm i more often local setup
// bc arrival of npm version x, no need global

// focus on local first
// npx less need something globally
// install packages, wait a bit. 

// MISSING??
// package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter skip)
// npm init -y (everything default)

// npm i lodash   // creates to package.json (make sure at root of directory ie tutorialx) // shows dependencies, lodash will be one of them now
// as well in vscode, press refresh, now at root have a node_modules folder, this is where the dependencies are stored, if don't already have it, npm will create it. 
// note if you decide to install a larger pkg with other dependencies, run npm i bootstrap for example, see bootstrap, jquery and poppers, dependency is bootstrap, but folder more


//1:53:16 into tutorial https://www.youtube.com/watch?v=Oe421EPjeBE


// Thus need package.json  to provide information about the project. stores dependancies project is using
// some cases will auto install

// external packages must install first before using
// so when do a require, it sees them


// so in the tutorial3 : root for this project so  far
// npm i lodash

/*
npm WARN saveError ENOENT: no such file or directory, open '/Users/sherrykennedy/Documents/NodeJSTutorial/Tutorial3/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/Users/sherrykennedy/Documents/NodeJSTutorial/Tutorial3/package.json'
npm WARN Tutorial3 No description
npm WARN Tutorial3 No repository field.
npm WARN Tutorial3 No README data
npm WARN Tutorial3 No license field.

+ lodash@4.17.21
added 1 package from 2 contributors and audited 1 package in 0.707s
found 0 vulnerabilities

*/
// utility program for common tasks
// lodash.com/docs/   arrays, strings difference ....

const _= require('lodash');
// test out , create an array of arrays
const items = [1,[2,[3,[4]]]];
// lodash has a flat and deep method that will just give this as an array
const newItems = _.flattenDeep(items);
console.log(newItems);
//  [1, 2, 3, 4 ]
console.log("hello world");
// not using bootstrap bc more pkgs. 
// when using git do not push node_modules up to the github
// create temp repo on github
// no .gitignore no readme
// temp_nodejs_tut
/*
First push
git init
git add .  For all or just the .gitignore as the first file so ones don’t want up there
Thus  git add .gitignore
Git commit -m “add gitignore file”   [.DS_Store. (for Mac) and node_modules not needed
git remote add origin https://github.com/yourname/temp_nodejs_tut.git
git branch -M main
git push -u origin main
note: if cloning elsewhere, need to clone and do an npm install that you need and will install the dependancies because package dependancy list
and if using react: when setting up the code: you do not share the node_modules, instead have package.json
note: simple dependencies and dev dependencies
command for this:
npm i nodemon -D   //--save-dev   //[or -D] the same
*/
// why save as dev dependancy?
// nodemon in production, is not needed 
// pmq for production, nodemon is a dev dep, linting formatting for dev dependancy, while creating,
// then clear the dev dependancy test etc with. 
// ensure that "devDependencies": {
 //   "nodemon": "^2.0.22"
//},
// setup scripts even without the nodemon
// "scripts"  
// add: 
// "start": "node app.js",
// "dev": "nodemon app.js"
// can remove the test
// **now to start application just run: npm start
// if first 'start' not working
// **can run: npm run dev
// no cursor because says that nodemon is watching the application
// add line in app.js console.log("hello world")
// save, nodemon restarts and can see the added text in console
// ** can just put in script:
// "start": "nodemon app.js"
// use ctrl c to stop
/*
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
*/

// TO::
/*
 "scripts": {
    "start": "nodemon app.js"
  },
*/

//*** to unistall a package 
// npm uninstall packageName
// stop from running
//npm uninstall package bootstrap 

//NOTE: this is one way, another way is to remove the whole
// node_modules folder, & package-lock.json
// do this because dependencies have versions
// as versions change, so does some of the functionality
// so person getting project, want to be the same
//thus package-lock.json would remove with node_modules
// ie bootstrap uses jquery, which changes all time
// so want if reestablish node_modules, need package-lock.json to reestablish
// package.json see version: 3 values
// see it as a contract between us and people developed
// first number :major change, breaking change
// minor, backward compatible
// last is a bug fix
// google package.json
// look for The Basics of Package json in Node.js and npm - NodeSource
// blog post, see name and version 

// Upcoming 
// Event loop, async patterns, event emiteer and streams
// Main concepts
// pre-built code

/*
EVENT LOOP:::
nodejs.org/en/docs/guides/event-loop-timers-ns-nextticks/
https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick
process.nexttick
event loop
allows nodejs to allow non blocking operations
input and output I/O operations, despite javascript being
single threaded, by offloading operations to the system kernal
whenever possible
-Most modern kernels are multi-threaded, & handle multiple operations in the background.
-remember offloading
OTHER RESOURCES:
https://nodejs.dev/en/learn/
find node.js with TypeScript
search nodejs dev event loop:
nodejs.dev shows in list , better resource
understanding process.nexttick
event loop
-- different versions may not have it
-- event listeners and targets class Event
-- async flow with timers
-- dev community has animated guide for it
https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62

-- videos:: go to youtube and see event loop
nodejs video Morning Keynote - Everything you need to know about nodejs event loop (about 15 min)
https://www.youtube.com/watch?v=PNa9OMajw9w
video also: what the heckis the event loop anyway, jsconf

**SLIDES
https://course-api.com/
see all slides.
1.synchronous js and single threaded
js read all line by line
only run next task once previous id done
2. offload something to browser, not for loop, 
browser provide api, offload to browser , can do a fetch, settimeout here. first, next then second bc of settimeout
only runs after the next task. executes timeout 0 seconds
thus offload time consuming operation to browser
we don't have to write blocking code.
we do for loop, but node js event loop 
generally
3. app, users, popular, 8 of them, requesting something from app
event loop to avoid single scenario, larry ie time consuming db call, event loop registers call back when task complete, 
rest of users dont have to wait , when operation is complet will execute it. the callback, ie 100 console log first then regardless time set does this. 
help of event loop does time consuming operations wait

all code examples are in the repository on git hub




*/

// FIRST EXAMPLE 
// similar to async version previously did 
const  { readFile } = require('fs');

console.log('started a first task');
//CHECK FILE PATH !!!!
readFile('./content/first.txt', 'utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');
//**readFile method waits till done, because it is ASYNCHRONOUS
// thus event loop will off load this
// when get error response or success response from readFile
// then callback is evoked

// code currently runs app.js with npm start
