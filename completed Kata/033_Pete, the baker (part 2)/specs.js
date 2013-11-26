describe('example tests', function() {
  // some helpers to make hashes comparable
  var sortHash = function(hash) {
    return Object.keys(hash).sort().reduce(function(p, c) { p[c] = hash[c]; return p; }, {});
  };
  
  var assertSimilarHash = function(expected, actual, message) {
    Test.assertSimilar(sortHash(expected), sortHash(actual), message);
  };

  it('should pass examples from description', function() {
    var recipe = {flour: 200, eggs: 1, sugar: 100};

    assertSimilarHash(getMissingIngredients(recipe, {flour: 50, eggs: 1}), {flour: 150, sugar: 100}, 'example #1 failed');
    assertSimilarHash(getMissingIngredients(recipe, {}), {flour: 200, eggs: 1, sugar: 100}, 'example #2 failed');
    assertSimilarHash(getMissingIngredients(recipe, {flour: 500, sugar: 200}), {flour: 100, eggs: 3, sugar: 100}, 'example #2 failed');
  });
});

describe('advanced tests', function() {
  var recipe = {flour: 200, eggs: 1, sugar: 100};
  
  // some helpers to make hashes comparable
  var sortHash = function(hash) {
    return Object.keys(hash).sort().reduce(function(p, c) { p[c] = hash[c]; return p; }, {});
  };
  
  var assertSimilarHash = function(expected, actual) {
    Test.assertSimilar(sortHash(expected), sortHash(actual));
  };
  
  it('should return missing ingredients, when something is missing for 1 cake', function() {
    assertSimilarHash(getMissingIngredients(recipe, {flour: 100}), {flour: 100, eggs: 1, sugar: 100});
    assertSimilarHash(getMissingIngredients(recipe, {flour: 200, sugar: 100}), {eggs: 1});
  });
  
  it('should return no missing ingredients, when enough was added for integer amount of cakes', function() {
    assertSimilarHash(getMissingIngredients(recipe, {flour: 200, eggs: 1, sugar: 100}), {});
    assertSimilarHash(getMissingIngredients(recipe, {flour: 400, eggs: 2, sugar: 200}), {});
    assertSimilarHash(getMissingIngredients(recipe, {flour: 1000, eggs: 5, sugar: 500}), {});
  });
  
  it('should return no missing ingredients for next integer amount of cakes', function() {
    assertSimilarHash(getMissingIngredients(recipe, {flour: 199, eggs: 1, sugar: 100}), {flour: 1});
    assertSimilarHash(getMissingIngredients(recipe, {flour: 1, eggs: 2, sugar: 200}), {flour: 399});
    assertSimilarHash(getMissingIngredients(recipe, {flour: 123, eggs: 70}), {flour: 13877, sugar: 7000});
  });
});