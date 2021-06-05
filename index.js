var shortUrl = require('node-url-shortener');

shortUrl.short('https://github.com/aniketartani', function(err, url){
    console.log(url);
});