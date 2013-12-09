Test.assertEquals(new Foo(2) + new Foo(3), 5, 'The sum is not the expected value');
Test.assertEquals(new Foo(-2) + new Foo(3), 1, 'The sum is not the expected value');
Test.assertEquals(new Foo(-21) + new Foo(-7), -28, 'The sum is not the expected value');
Test.assertEquals(new Foo(1.5) + new Foo(0.2), 1.7, 'The sum is not the expected value');