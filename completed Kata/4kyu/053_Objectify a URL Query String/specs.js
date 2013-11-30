function test(msg, q, obj) {
  it(msg, function() {
    assertSimilarObjects(convertQueryToMap(q), obj);
  });
}

describe("Basic functionality", function() {
  test('should handle empty query string', '', {});
  test('should handle simple parameterss',
      'a=1&b=2',
      {a:'1', b:'2'});
  test('should handle URI Encoding',
      'a=1%202',
      {a: '1 2' });
  test('should handle URI Encoding 2',
      'a=a%26b%3Dc%3F',
      {a: 'a&b=c?' });
});

describe("Nested Parameters", function() {
  test('should handle basic nested properties',
      'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
      { 'user': {
          'name': { 'firstname': 'Bob', 'lastname': 'Smith' },
          'favoritecolor': 'Light Blue'
        }
      });
      
  test('should handle repeated property names',
      'user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie',
      {user: {
        '1': {name: 'Alice'},
        '2': {name: 'Bob'},
        '3': {name: 'Charles'},
        '4': {name: 'Debbie'}
      }});
});

describe('Random Input', function() {
  // finally, some random tests
  var randomString = function() {
        var ret = '';
        while(ret.length < 5) {
          ret += 'bcdfghijklmnpqrstvwxz'[Math.floor(Math.random()*20)];
        }
        return ret;
      },
      input = [],
      gen = function(x, path) {
        var ret = {}, i, rk, rv;
        for(i=0; i<2; i++) {
          rk = randomString();
          if(x > 0) {
            if(path) {
              ret[rk] = gen(x-1, path+'.'+rk);
            } else {
              ret[rk] = gen(x-1, rk);
            }
          } else {
            rv = randomString();
            ret[rk] = rv;
            input.push(path+'.'+rk + '=' + rv);
          }
        }
        return ret;
      },
      output = gen(2);
      
  test('should handle random input', input.join('&'), output);
});