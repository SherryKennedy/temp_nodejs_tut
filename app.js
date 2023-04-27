
// NOtE: End of SEction
//  Done with node Fundamentals
// Next:: stop creating servers
// video 3:40:42

// First build a webserver
// Exchange data on the web
/*
slide: es to server
HTTP messages 
open web browser, type url, request, goes to server
serve sends back response with / without data
could be another page

user http request message
server sends http response message

why node/express
make lives easier
job server, always make resource avail
graphical/gui interface, large
always avail, no time off
cloud: bunch of computers,servers connected together

slide: request/response: get 
both: messages structured:
start line
optinal headers
a blank line indicating all meta info has been sent
headers are that meta info essentially
optinal body

request messages what user sends; ie open browser request page, or open web app , still http requests
response message what server sends: server responsibility, we will setup up proper server that sends a correct response

slide : http methods:
request: in general, start line: there is usally a method, then url, then http version
interested in methods and url, effectively comm what want to do
methods: 
GET : read data
POST : Insert data
PUT: Update Data
DELETE: delete data

GET: www.store.com/api/orders    : get all orders
POST: www.store.com/api/orders   : place an order (send data)
GET:  www.store.com/api/order/:id : get singel order (path params)
PUT: www.store.com/api/orders/:id : update specific order (params + send data)
DELETE: www.store.com/api/orders/:id : delete order (path params)

GET is default request, when open browser
url is the web address...
headers, optional, key value pair, not manual, some need to add on own
optional body, user requests, have, just resource from server,
then body, send info from server/payload called as well
response message, we will create, most created, some we need to do
http version 1.1 
status code:
signals result of request
200: successful request
400: request error
404: resource not there
401: not authorized
more codes, many

headers: provide info about response message for server side
key value pairs
html text: send back
second option, send back data

most of the time , json data
array, not sending text and html, send application json
send array with bunch of objects


setup own server:: johnsmilga.com
git clone node-express-course by johnsmilga on github.com
or download it











*/