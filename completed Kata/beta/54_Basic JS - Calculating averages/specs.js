Test.expect(typeof Calculator === 'object' || typeof Calculator === 'function');

Test.assertEquals(Calculator.average(3,4,5),4);
Test.assertEquals(Calculator.average(3,4,5,6,7,8,9,8,7,6,5,4,3), 5.769230769230769, 'Longer test');
Test.assertEquals(Calculator.average(),0,'No arguments should result in 0');