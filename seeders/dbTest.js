

'use strict';

module.exports = {
    up: function(queryInterface, Sequelize){
        return queryInterface.bulkInsert('world_cups', [{
            fact: 'Uruguay were the hosts for the first ever World Cup in 1930 and they also went on to win the tournament.',
            country: 'Urugay',
            year: 1930,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'England have only ever hosted the tournament once in 1966, which was also the only time they ever won the tournament, defeating Germany in a dramatic last-minute 4 – 2 win.',
            country: 'England',
            year: 1966,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'The 2002 World Cup, hosted by both South Korea & Japan, was the first ever World Cup to be hosted by two different nations.',
            country: 'South Korea & Japan',
            year: 2002,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'Egyptian Goalkeeper, Essam El Hadary, is the oldest player to ever play in the World Cup at the age of 45, having played at the 2018 Russian World Cup. After saving Saudi Arabia’s Fahad Al Muwallad’s penalty in his last game he then became the oldest ever goalkeeper to save a penalty at the World Cup.',
            country: 'Egypt',
            year: 2018,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'The oldest person to ever score a goal at a World Cup was Cameroonian player Roger Milla, who scored against Russia in 1994',
            country: 'Cameroon',
            year: 1994,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'The fastest ever World Cup goal took place only 10.89 seconds after kick off and was scored by Hakan Sukur of Turkey against South Korea in 2002.',
            country: 'Turkey',
            year: 2002,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'In 1966, the World Cup trophy was stolen prior to the tournament and was missing for 7 days before being found by a dog named Pickles.',
            country: 'England',
            year: 1966,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'Mexico is the team with the most losses, having lost 25 different matches since the World Cup started.',
            country: 'Mexico',
            year: 1930,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'Brazil are the team with the most World Cup wins, having won 70 of games at the tournament.',
            country: 'Brazil',
            year: '1930',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            fact: 'Retired German striker Miroslav Klose is the World Cup’s highest total goal scorer, having scored 16 goals in total.',
            country: 'Germany',
            year: 2014,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ])
    },
    down: function(queryInterface, Sequelize){
        
    }
}