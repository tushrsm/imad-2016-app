var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
`tushar-01 :{
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
},
`tushar-02 :{
title:'tushar-02',
heading: 'hello guys',
date: '10/11/2016',
content:     `<div>
                      <p> 
                these for 2nd    hi im Tushar Mandavkar,i like to be anew app devloper. 
                    </p>
            </div>
            <div>
                are  you enjoy????
            </div>
        </div>`
},
`tushar-03 :{
title:'tushar-01',
heading: 'hello guys',
date: '11/11/2016',
content:     `<div>
                      <p> 
                these for 3rd    hi im Tushar Mandavkar,i like to be anew app devloper. 
                    </p>
            </div>
            <div>
                are  you enjoy????
            </div>
        </div>`
}
    };

function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    
var htmlTemplate=`
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
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/articalName', function (req, res) {
 var articleName=req.pqrqms.articlename;
res.send(createTemplate(articles[articlsName]));
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
