Test.expect(typeof Calculator === 'object' || typeof Calculator === 'function');

Test.assertEquals(Calculator.add(2,4),6, '2+4=6');
Test.assertEquals(Calculator.subtract(5,3),2, '5-3=2');
Test.assertEquals(Calculator.multiply(9,2),18, '9x2=18');
Test.assertEquals(Calculator.divide(12,4),3, '12/4=3');
Test.assertEquals(Calculator.divide(33,0),false, 'Tried to divide by zero');