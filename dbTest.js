const db = require('./models');
async function createMovie(obj) {
    db.movie.create(obj);
}
// const obj1 = {
//     title: "Avatar",
//     year: "2009"};
    
// const obj2 = {
//     title: "I Am Legend",
//     year: "2007"};

// const obj3 = {
//         title: "300",
//         year: "2006"};

// const obj4 = {
//             title: "The Avengers",
//             year: "2012"};
// const obj5 = {
//                 title: "The Wolf of Wall Street",
//                 year: "2013"};
// const obj6 = {
//                 title: "Interstellar",
//                 year: "2014"}; 
// createMovie(obj1)

async function associateImages(options, movieId) {
    try {
      const [image, created] = await db.image.findOrCreate(options)

      const movie = await db.movie.findOne({
        where: {
            id: movieId
        }
      })

      await movie.addImage(image);
  
    } catch (error) {
      console.log(error)
    }
  }
  const option1 = {
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
    }
  }
  const option2 = {
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg'
    }
  }
  // associateImages(option1, 13)
  // associateImages(option2, 13)
  const option3 = {
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg'
    }
  }
  const option4 = {
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg'
    }
  }
  // associateImages(option3, 9)
  // associateImages(option4, 9)
  const option5 = {
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
    }
  }
  const option6 = {
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg'
    }
  }
  // associateImages(option5, 12)
  // associateImages(option6, 12)

  async function createGenre(obj, movieId) {
    try {
      const [genre, genreCreated] = await db.genre.findOrCreate({
        where: obj
      })
  
      const [movie, movieCreated] = await db.movie.findOrCreate({
        where: { id: movieId }
      })
  
      await movie.addGenre(genre)
  
    } catch (error) {
      console.log(error)
    }
  }
  const obj1 = {name: "Drama"};
  const obj2 = {name: "Horror"}
  const obj3 = {name: "Sci-Fi"}
  createGenre(obj1, 9)
  createGenre(obj2, 9)
  createGenre(obj3, 9)

  const obj4 = {name: "Adventure"}
  createGenre(obj1, 12)
  createGenre(obj4, 12)
  createGenre(obj3, 12)
  const obj5 = {name: "Action"}
  const obj6 = {name: "Fantasy"}
  createGenre(obj5, 12)
  createGenre(obj6, 12)
  createGenre(obj3, 12)
  const obj7 = {name: "Romance"}
  createGenre(obj1, 10)
  createGenre(obj7, 10)
  