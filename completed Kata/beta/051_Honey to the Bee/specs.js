var hive = new Hive();
var bee = new Bee(11, hive);

Test.expect(bee.capacity == 11, "the bee does not have the expected capacity");
Test.expect(hive.pollen == 100, "hive.pollen does not have a valid value");

bee.unloadPollen();

Test.expect(hive.pollen == 111, "hive.pollen amount does not have a valid value");
