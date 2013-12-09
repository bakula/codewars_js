var a, b, c;

Test.assertSimilar(intersect(), []);

a = [];
Test.assertSimilar(intersect(a), []);

a = ['foo', 'bar'];
Test.assertSimilar(intersect(a), ['foo', 'bar']);

a = ['foo', 'bar'];
b = ['bar', 'fpp'];
Test.assertSimilar(intersect(a, b), ['bar']);

a = ['foo', 'bar', 'dog'];
b = ['bar', 'foo', 'cat'];
c = ['fpp', 'gin', 'bar'];
Test.assertSimilar(intersect(a, b, c), ['bar']);

a = ['dog', 'bar', 'foo']
b = ['foo', 'bar', 'cat'];
c = ['gin', 'foo', 'bar'];
Test.assertSimilar(intersect(a, b, c), ['bar', 'foo']);

a = ['foo', 'bar', 'dog'];
b = ['foo', 'bar', 'cat'];
c = [];
Test.assertSimilar(intersect(a, b, c), []);