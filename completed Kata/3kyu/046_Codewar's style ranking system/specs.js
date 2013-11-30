var user = new User();

var assert = function(rank, expectedRank, expectedProgress) {
  user.incProgress(rank);
  Test.expect(user.rank === expectedRank, "After applying rank of " + rank + " the resulting user rank was expected to be " + expectedRank + ", but was actually " + user.rank);
  return Test.expect(user.progress === expectedProgress, "After applying rank of " + rank + " the progress was expected to be " + expectedProgress + ", but was actually " + user.progress);
};

var assertError = function(rank) {
  var passed;
  passed = false;
  try {
    user.incProgress(rank);
  } catch (ex) {
    passed = true;
  }
  return Test.expect(passed, "Expected incProgress(" + rank + ") to raise an error");
};

describe('User', function(){
  it('should properly support incProgress', function(){
    assert(-8, -8, 3);
    
    user = new User();
    assert(-7, -8, 10);
    
    user = new User();
    assert(-6, -8, 40);
    
    user = new User();
    assert(-5, -8, 90);
    
    user = new User();
    assert(-4, -7, 60);
    
    user = new User();
    assert(-8, -8, 3);
    
    user = new User();
    assert(1, -2, 40);
    assert(1, -2, 80);
    assert(1, -1, 20);
    assert(1, -1, 30);
    assert(1, -1, 40);
    assert(2, -1, 80);
    assert(2, 1, 20);
    assert(-1, 1, 21)
    assert(3, 1, 61);
    assert(8, 6, 51);
    assert(8, 6, 91);
    assert(8, 7, 31);
    assert(8, 7, 41);
    assert(8, 7, 51);
    assert(8, 7, 61);
    assert(8, 7, 71);
    assert(8, 7, 81);
    assert(8, 7, 91);
    assert(8, 8, 0);
    assert(8, 8, 0);
  });
  
  it('should handle invalid range values', function(){
    assertError(9);
    assertError(-9);
    assertError(0);
  });
});