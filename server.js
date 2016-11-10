var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var tushar01 ={
title:'tushar-01',
heading: 'hello guys',
date: '08/11/2016',
content:     `<div>
                      <p> 
                    hi im Tushar Mandavkar,i like to be anew app devloper. 
                    </p>
            </div>
            <div>
                are  you enjoy????
            </div>
        </div>`
};

var htmltemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
        <style>
   
        </style>
    </head>
    <body>
        <div class="container">
            <div> 
                <a href='/'>Home</a> 
            </div>
            <div>
               ${heading}
            </div>
            <div>
                ${date}
            </div>
            <hr/>
            <div>
           ${content}
            </div>
        </div>
    </body>
</html>
;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/tushar-01', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'tushar-01.html'));
});

app.get('/tushar-02', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'tushar-02.html'));
});

app.get('/tushar-03', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'tushar-03.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
