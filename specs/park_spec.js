const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let park;

  beforeEach(function () {
    park = new Park("Jurassic Park", 20); //equal to a new park
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it("should have a ticket price", function () {
    const actual = park.price;
    assert.strictEqual(actual, 20);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.collectionOfDinos;
    console.log(actual);
    assert.strict(actual, []);
  });

  it("should be able to add a dinosaur to its collection", function () {
    park.addDinos("Velociraptor");
    park.addDinos("Stegosaurus");
    const actual = park.collectionOfDinos;
    assert.deepStrictEqual(actual, ["Velociraptor", "Stegosaurus"]);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.addDinos("Pterodactylus");
    park.addDinos("Stegosaurus");
    park.removeDinos("Pterodactylus");
    const actual = park.collectionOfDinos;
    assert.deepStrictEqual(actual, ["Stegosaurus"]);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    const dino1 = new Dinosaur("Pterodactylus", "herbivore", 15);
    const dino2 = new Dinosaur("trex", "herbivore", 30);
    const dino3 = new Dinosaur("Stegosaurus", "herbivore", 25);

    park.addDinos(dino1);
    park.addDinos(dino2);
    park.addDinos(dino3);

    let currentDinoVisitors;
    let actual = park.collectionOfDinos[0];

    for (let i = 0; i < park.collectionOfDinos.length; i++) {
      const dinosaur = park.collectionOfDinos[i];

      currentDinoVisitors = dinosaur.guestsAttractedPerDay;

      if (currentDinoVisitors > actual.guestsAttractedPerDay) {
        actual = dinosaur;
      }
    }

    assert.equal(actual, dino2);
  });

  xit("should be able to find all dinosaurs of a particular species");

  xit("should be able to calculate the total number of visitors per day");

  xit("should be able to calculate the total number of visitors per year");

  xit("should be able to calculate total revenue for one year");
});
