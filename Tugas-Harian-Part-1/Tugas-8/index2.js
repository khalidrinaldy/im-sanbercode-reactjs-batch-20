var readBooksPromise = require('./promise.js');
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
];

function read(time, count) {
    readBooksPromise(time, books[count])
        .then(function(sisa) {
            if (count != books.length-1) {
                read(sisa, count+1);
            }
        })
        .catch(function(error) {
            
        })
}

let time = 10000;
let count = 0;
read(time, count);