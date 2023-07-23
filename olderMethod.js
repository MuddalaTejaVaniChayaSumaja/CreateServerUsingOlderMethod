var http=require('http');
var mod=require('./olderMethodModule');
http.createServer(function(rd,rt){
    var msg=mod.message();
    rt.writeHead(200,{'Content-type':'text/html'});
    rt.write(msg)
    rt.end('Response Ended');
}).listen(2000);