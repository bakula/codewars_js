Test.expect( isObject({}) )
Test.expect( isObject(1) === false )
Test.expect( isObject([]) === false )
Test.expect( isObject(function(){ }) === false )

Test.expect( isObject(extend()) )
Test.expect( propertyCount(extend()) === 0 )

Test.expect( isObject(extend(1)) )
Test.expect( propertyCount(extend(1)) === 0 )

var test1 = extend({a: 1, b: 2})
Test.expect( propertyCount(test1) === 2 )
Test.expect( test1.a === 1 && test1.b === 2 )

var test2 = extend({a: 1, b: 2}, {c: 3})
Test.expect( propertyCount(test2) === 3 )
Test.expect( test2.a === 1 && test2.c === 3 )

var test3 = extend({a: 1, b: 2}, {c: 3}, {d: 4}, {e: 5}, {g: 6}, {f: 7})
Test.expect( propertyCount(test3) === 7 )
Test.expect( test3.a === 1 && test3.f === 7 )

var test4 = extend({a: 1, b: 2}, {c: 3, a: 3})
Test.expect( propertyCount(test4) == 3 )
Test.expect( test4.a === 1 && test4.c === 3)

var test5 = extend({a: 1, b: 2, length: 6}, [], "nope", false, function() { }, {c: 3, a: 3})
Test.expect( propertyCount(test5) == 4 )
Test.expect( test5.a === 1 && test5.c === 3 && test5.length === 6)

var test6 = extend({a: false, b: null, c: 3}, {a: true, b: 1});
Test.expect(test6.a === false, "Falsy value was overwritten by a truthy value")
Test.expect(test6.b === null, "Falsy value was overwritten by a truthy value")