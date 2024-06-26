const { Explore_Level } = require('../models');

const exploreLevelData = 
[
{
    "id": 1,
    "name": "Tortoise",
    "pointsRequired": 1 
  },
  {
    "id": 2,
    "name": "Mouse",
    "pointsRequired": 5 
  },
  {
    "id": 3,
    "name": "Pig",
    "pointsRequired": 10 
  },
  {
    "id": 4,
    "name": "Squirrel",
    "pointsRequired": 15 
  },
  {
    "id": 5,
    "name": "Black Mamba Snake",
    "pointsRequired": 20
  },
  {
    "id": 6,
    "name": "Elephant",
    "pointsRequired": 25
  },
  {
    "id": 7,
    "name": "Kangaroo",
    "pointsRequired": 30
  },
  {
    "id": 8,
    "name": "Grizzly Bear",
    "pointsRequired": 35
  },

  {
    "id": 9,
    "name": "Cat",
    "pointsRequired": 40
  },
  {
    "id": 10,
    "name": "Lion",
    "pointsRequired": 45
}
];

const seedExploreLevel = () => Explore_Level.bulkCreate(exploreLevelData);

module.exports = seedExploreLevel;
