var root = 'http://www.codewars.com'
var builder = new UriBuilder(root + '?a=1')

function testUrl(url){
  url = root + encodeURI(url)
  Test.assertEquals(builder.build(), url, "build() with params " + Test.inspect(builder.params))
}

describe('UriBuilder', function(){
  it('should have build method', function(){
    Test.expect(builder.build)
  });
  it('params.a = 1', function(){
    testUrl('?a=1')
  });
  
  it('params.a = 2', function(){
    builder.params.a = 2
    testUrl('?a=2')
  });
  
  it('params.b = 1', function(){
    builder.params.b = 1
    testUrl('?a=2&b=1')
  });
  
  it('delete a from params', function(){
    delete builder.params.a
    testUrl('?b=1')
  });
  
  it('params.b = "a b"', function(){
    builder.params.b = 'a b'
    testUrl('?b=a b')
  });
});