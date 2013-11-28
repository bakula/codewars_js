Test.expect(factorial(0) == 1, "What is '0!' ?");
Test.expect(factorial(1) == 1, 'Your math may be incorrect');
Test.expect(factorial(2) == 2, 'Your math may be incorrect');
Test.expect(factorial(5) == 120, 'Your math may be incorrect');
Test.expect(factorial(-1) == null, "Don't forget to check for negatives!");