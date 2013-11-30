function is(type) {
  return function(obj) {
    return toString.call(obj) == '[object ' + type + ']';
  }
}

var isNumber = is('Number');
var isString = is('String');

Test.assertSimilar(reject(['a', 'b', 3, 'd'], isNumber), ['a', 'b', 'd']);
Test.assertSimilar(reject(['a', 'b', 3, 'd'], isString), [3]);
Test.assertSimilar(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [1, 3, 5]);