const express = require('express');
const path = require('path');
const chalk = require('chalk');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = new express();

app.set('views','./src/views');

app.use(express.static(path.join(__dirname,'/public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.set('view engine','ejs');

var nav = [
    { link:'/',title:'Add Students' },
    { link:'/viewAll',title:'View All'},
    { link:'/search',title:'Search'},
    { link:'/update',title:'Update'}

];

const viewAllRouter = require('./src/routes/viewAllRoutes')(nav);
const searchRouter = require('./src/routes/searchRoutes')(nav);
const updateRouter = require('./src/routes/updateRoutes')(nav);


app.use('/viewAll',viewAllRouter);
app.use('/search',searchRouter);
app.use('/update',updateRouter);

app.get('/',(req,res)=>{
    res.render('index',
    {
        nav,
        title:'Students'
    });
});

app.route('/save')
    .post((req,res)=>{
    console.log(req.body);
});
console.log("hello");
app.listen(3001,()=>{
    console.log('Listening to Port: '+chalk.green('3001'));
});