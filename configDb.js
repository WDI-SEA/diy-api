const db = require('./models');
const drink = require('./models/drink');

const errorHandler = error => {
  console.log(`error detected`);
  console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`);
  console.log(error);
}

/*
Drinks data model
---
type: string (NOT NULL), //eg 'coffee'
description: text, // 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as beans) are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.' 
servedWarm: string //'sometimes'
deliciousScale: int //9 (out of 10)
*/

let coffeeData = {
  type: 'Coffee',
  description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as beans) are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.' ,
  servedWarm: 'Sometimes',
  deliciousScale: 9
}

let icedTeaData = {
  type: 'iced Tea',
  description: 'Iced tea (or ice tea) is a form of cold tea. Though usually served in a glass with ice, it can refer to any tea that has been chilled or cooled. It may be sweetened with sugar, syrup and/or apple slices,' ,
  servedWarm: 'impossible',
  deliciousScale: 7
}

let aguasFrescasData = {
  type: 'Aguas frescas',
  description: 'Aguas frescas (Spanish for "cool waters", or literally "fresh waters") are light non-alcoholic beverages made from one or more fruits, cereals, flowers, or seeds blended with sugar and water. They are popular in Mexico, Central America and the United States. Some of the more common flavors include tamarind, hibiscus, and horchata.' ,
  servedWarm: 'please no',
  deliciousScale: 10
}

let hotToddyData = {
  type: 'Hot toddy',
  description: 'A hot toddy, also known as hot whiskey in Ireland, is typically a mixed drink made of liquor and water with honey (or, in some recipes, sugar), herbs (such as tea) and spices, and served hot.[3] Hot toddy recipes vary and are traditionally drunk before retiring for the night, in wet or cold weather or to relieve the symptoms of the cold and flu. In How to Drink, Victoria Moore describes the drink as "the vitamin C for health, the honey to soothe, the alcohol to numb."' ,
  servedWarm: 'always',
  deliciousScale: 10
}

function makeNew(createData){
  db.drink.create(createData)
  .then(newData => { 
    console.log(`drink ${newData}`)
  }).catch( error => errorHandler(error) );
}

makeNew(coffeeData);
makeNew(icedTeaData);
makeNew(aguasFrescasData);
makeNew(hotToddyData);


// db.drink.create({
//   type,
//   description,
//   servedWarm,
//   deliciousScale
// })