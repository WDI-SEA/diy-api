'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('albums', [
      { title: 'Jimmy Eat World',
        release_date: '1994-12-01',
        record_label: 'Wooden Blue',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Jimmy_Eat_World_1994.jpg/220px-Jimmy_Eat_World_1994.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Static Prevails',
        release_date: '1996-07-23',
        record_label: 'Capitol',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Static_Prevails_%28Jimmy_Eat_World_album_-_cover_art%29.jpg/220px-Static_Prevails_%28Jimmy_Eat_World_album_-_cover_art%29.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Clarity',
        release_date: '1993-02-23',
        record_label: 'Capitol',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Clarity_%28Jimmy_Eat_World_album_-_cover_art%29.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Bleed American',
        release_date: '2001-07-24',
        record_label: 'Interscope',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Bleedamerican.jpg/220px-Bleedamerican.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Futures',
        release_date: '2004-10-19',
        record_label: 'Interscope',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Futues.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Chase This Light',
        release_date: '2007-10-16',
        record_label: 'Interscope',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Chasethislight.jpg/220px-Chasethislight.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Invented',
        release_date: '2010-09-28',
        record_label: 'DGC/Interscope',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Jimmy_Eat_World_-_Invented.jpg/220px-Jimmy_Eat_World_-_Invented.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Damage',
        release_date: '2013-06-11',
        record_label: 'RCA',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Jimmy_Eat_World_-_Damage.jpg/220px-Jimmy_Eat_World_-_Damage.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Integrity Blues',
        release_date: '2016-10-21',
        record_label: 'RCA',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/300px-Integrity_Blues.jpg/220px-300px-Integrity_Blues.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Surviving',
        release_date: '2019-10-18',
        record_label: 'RCA',
        artwork_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/300px-Integrity_Blues.jpg/220px-300px-Integrity_Blues.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
