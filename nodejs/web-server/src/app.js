const path = require('path');
const express = require('express');
const hbs = require('hbs');


console.log(__dirname);
console.log(path.join(__dirname,'../public'));

const app = express();

// define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);

hbs.registerPartials(partialsPath);

const options = {
    extensions: ['htm', 'html']
}


// Setup static directory to serve
app.use(express.static(publicDirectoryPath, options))

app.get('', (req,res)=>{
    res.render('index',{
        title: 'Weather',
        name:'ravindra',
        footerText: 'root footer'
    })
})

app.get('/about',(req,res)=>{
    res.render('about', {
        title:'about page',
        name: "ravi",
        footerText:'about footer'
    })
})

// app.use(express.static(aboutDirectoryPath))
// app.get('', (req,res) => {
//     res.send('<h1>hell o</h1>');
// })

// app.get('/help', (req, res)=> {
//     res.send({
//         name: "Ravindra",
//         age: '26'
//     })
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>about</h1>');
// })

app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'please provide a valid error'
        })
    }
    // console.log('REQ',req.query);
    res.send({
        forecast: 'Sunny',
        temp: '90 degrees',
        address:req.query.address
    });
})
//app.com

app.get('/products',(req,res)=>{
    res.send({
        products: []
    })
})

app.get('/help/*',(req,res)=>{
    res.render('errorPage', {
        errorSection:'Help 404',
    })
})

app.get('*',(req,res)=>{
    res.render('errorPage', {
        errorSection:'All 404',
    })
})

app.listen(3001, ()=>{
    console.log('Server is up on port 3001')
});
