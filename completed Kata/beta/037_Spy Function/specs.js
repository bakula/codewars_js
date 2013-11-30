describe("Spy", function(){
  var noop = function(){};
  
  it("Should be defined", function(){
    Test.expect(spy, "spy is undefined");
    Test.assertEquals(typeof spy, "function", "spy is not a function");
  });
  
  it("Should return a function", function() {
    Test.assertEquals(typeof spy(noop), "function", "the result is not a function");
  });
  
  it("Should return the result of wrapped function call", function() {
    var result = {}, spied = spy(function(){return result;});
    Test.assertEquals(spied(), result, "there result is wrong");
  });
  
  it("Should provide report method", function() {
    var spied = spy(noop);
    Test.assertEquals(typeof spied.report, "function", "report is not a function");
  });
  
  it("Should report on number of calls", function(){
    var spied = spy(noop), report = spied.report();
    Test.assertEquals(report.totalCalls, 0, "calls count is not zero");
    spied();
    Test.assertEquals(report.totalCalls, 1, "calls count is not 1");
    spied();
    Test.assertEquals(report.totalCalls, 2, "calls count is not 2");
  });
  
  it("Should log call history", function() {
    var ctx = {}, arg = {}, spied = spy(noop),
    history = spied.report().history,
    verify = function(num) {
      var entry = history[num];
      Test.assertEquals(entry.context, ctx, "context is wrong");
      Test.assertEquals(entry.args.length, 1, "incorrect arguments length");
      Test.assertEquals(entry.args[0], arg, "incorrect argument");
      Test.assertEquals({}.toString.call(entry.when), "[object Date]", "when is not a date");
    };
    
    Test.expect(Array.isArray(history), "history is not an array");
    Test.assertEquals(history.length, 0, "history is not empty");
    
    spied.call(ctx, arg);
    verify(0);
    
    spied.call(ctx, arg);
    verify(1);
  });
});