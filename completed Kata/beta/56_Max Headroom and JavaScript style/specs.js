Test Cases:

Test.expect(stringify(getMax2()) == stringify(getMax1()));

var max = { name: 'Max Headroom' };

Test.expect(getMax1().toString() == max.toString());
Test.assertSimilar(getMax1(), max);
Test.assertSimilar(getMax2(), max);