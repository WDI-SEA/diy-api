"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cards", [
      {
        name: "Storm",
        energy: 3,
        power: 2,
        text: "On Reveal: Flood this location.  Next turn is the last turn cards can be played here.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gambit",
        energy: 3,
        power: 1,
        text: "On Reveal: Discard a card from your hand.  Destroy a random enemy card.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wolverine",
        energy: 2,
        power: 2,
        text: "When this is discarded or destroyed, regenerate it at a random location with +2 Power.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rogue",
        energy: 3,
        power: 1,
        text: "On Reveal: Steal an Ongoing ability from a random enemy card at this location.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Doctor Doom",
        energy: 6,
        power: 5,
        text: "On Reveal: Add a 5-Power DoomBot to each other location.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Green Goblin",
        energy: 3,
        power: -3,
        text: "On Reveal: Your opponent gains control of this.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("cards", null, {});
  },
};
