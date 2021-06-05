const express = require('express');
const app = express();
const path = require('path');
const shortUrl = require('node-url-shortener');
let port = 3000;

//EXPRESS RELATED STUFF
app.use('/static', express.static('static'));//Serving the static files
app.use(express.urlencoded());

//PUG RELATED STUFF
app.set('view engine', 'pug');// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the view/template directory (we could also do this without path module)

//ENDPOINTS

app.post('/', (req, res) => {
    myurl = req.body.myurl;
    shortUrl.short(`${myurl}`, function (err, url) {
        console.log(url);
        let a = url;
        const params = {'url':`${a}`};
        res.status(200).render('index',params)});
})
app.get('/', (req, res) => {
    
    myurl = req.body.myurl;
    shortUrl.short(`${myurl}`, function (err, url) {
        console.log(url);
        let a = url;
        const params = {'url':`${a}`};  
        res.status(200).render('index',params)});
})
//START THE SERVER

app.listen(port, () => {
    console.log(`The application is started successfully on port ${port}`)
})