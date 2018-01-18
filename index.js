// Добавьте еще один middleware. 
// Он должен выводить в консоль метод, 
// протокол каждого запроса и ответ на вопрос был ли этот запрос AJAX-запросом

// Добавьте middleware, который будет записывать в файл 
// тело (если есть) или строку-query (если есть) каждого запроса.

const express = require ('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


function someMiddle(req,res,next){
	console.log('Hello!')
	next();
}

function questionMiddle(req, res, next){
	console.log("Method:", req.method,"Protocol:", req.protocol, "Ajax request:", req.xhr);
	next();
}

function writeMiddle(req, res, next){
	// var body =[];
	// req.query('/hello');
	// res.send(body);app.get("/car/make", (req, res) => {  
    console.log(req.query);
	next();
}


app.use(someMiddle);
app.use(questionMiddle);
app.use(writeMiddle);

app.get('/', (req, res) =>{
	// res.send('Hello!');
	res.end();
});


app.listen(3000);