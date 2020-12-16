var readBooks = require('./callback.js');
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
];
function rekursif(time,count) {
    readBooks(time, books[count], function(sisa) {
        if (count != books.length-1) {
            time = sisa;
            rekursif(time,count+1);
        }
    });
}
let time = 10000;
let count = 0;
rekursif(time,count)