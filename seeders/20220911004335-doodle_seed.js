'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('doodles', [
      { breed: 'Labradoodle',
        personality: 'Sweet cuddle bug floof',
        img_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mydogbreeders.com%2Fimages%2Fdogs%2Flabradoodle%2Flabradoodle-041.jpg&f=1&nofb=1 ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    { breed: 'Bernadoodle',
        personality: 'Nutty floof',
        img_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnebula.wsimg.com%2Ff596fdc574a023c611d45d5e4807625a%3FAccessKeyId%3D4ED36FB4E6A54BD00006%26disposition%3D0%26alloworigin%3D1&f=1&nofb=1 ",
        createdAt: new Date(),
        updatedAt: new Date()
     },
    { breed: 'Goldendoodle',
      personality: 'Loyal lovie floof',
      img_url:" https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.puppystepstraining.com%2Fwp-content%2Fuploads%2F2018%2F12%2Funnamed-4-1184x1579.jpg&f=1&nofb=1",
      createdAt: new Date(),
      updatedAt: new Date()
      },
    { breed: 'Ausiedoodle',
      personality: 'crazy eyed snuggle floof',
      img_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bubblypet.com%2Fwp-content%2Fuploads%2F2021%2F01%2FBlue-Merle-Miniature-Aussiedoodle-768x883.jpg&f=1&nofb=1 ",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { breed: 'Shnoodle',
      personality: 'secretly judging you floof',
      img_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.keystonepuppies.com%2Fwp-content%2Fuploads%2F2018%2F10%2FPipy-Schnoodle.jpg&f=1&nofb=1 ",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    ], {})
  }, 

    /**
     * Add seed commands here.
     *
     *
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


     down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('authors', null, {})
    }
  }