
var http=require('http');
var fs=require('fs');
var path=require('path');

http.createServer(function (request,response) {
    if(request.url==='/'||request.url==='index'){
        fs.readFile(path.join(__dirname,'tcs.html'),function (err,data) {
            if (err){
                console.log(path.join(__dirname,'tcs.html'))
            } else {
                response.end(data)
            }
        })
    }
    // response.setHeader('Content-Type','text/html;charset=utf-8');
    // response.end('你好')
}).listen(8080,function () {
    console.log('成功')
});