const db = require('./models');

const errorHandler = error => {
    console.log('🔥🔥🔥🔥🔥🔥')
    console.log(error)
}

db.movie.create({
    title: "Braveheart",
    year: 1995,
    rating: 78
    }).then(movieData => {
        // Now access new movie via movieData variable
        console.log('🍿🍿🍿It worked!🍿🍿🍿');
        console.log(movieData);
    }).catch(errorHandler);
    
    console.log('☺️DONE!☺️');