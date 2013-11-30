for (var i1 = 0;i1<10;i1++){
  if(Math.random()>.5){
    Test.expect( locate(['a','b',['c','d',['[e632784632478&^*&^&*]']]],'[e632784632478&^*&^&*]')===true , "not find element on 1st level" );
  }else{
    Test.expect( locate(['a','b',['c','d',['e']]],'ffdfsdfd')===false , " element not exist" );  
  }
  
}
Test.expect( locate(['a','b',['c','d',['e']]],'a')===true , "not find element on 1st level" );
Test.expect( locate(['a','b',['c','d',['e']]],'d')===true , "not find element on 2nd level" );
Test.expect( locate(['a','b',['c','d',['e']]],'e')===true , "not find element on 3th level" );
Test.expect( locate(['a','b',['c','d',['e',['a','b',['c','d',['e4']]]]]],'e4')===true , "not find element on 7th level" );
Test.expect( locate(['a','b',['c','d',['e',['a','b',['c','d',['e',['a','b',['c','d',['e4',['a','b',['c','d',['e',['a','b',['c','d',['e',['a','b',['c','d',['e14']]]]]],]]]]]]]]],]]],'e')===true , "not find element on 10th level" );
Test.expect( locate(['a','b',['c','d',['e']]],'f')===false , "element not exist" );
var arr = [[]];
var a = arr[0];
for (var i = 0;i<15;i++){
  a.push([[i]]);
  a = a[a.length-1];
}
var r = Math.random();
a.push(r);
Test.expect( locate(arr,r)===true , "not find element on ~15th level" );
Test.expect( locate(arr,','+r)===false , "find element not existing in array:,"+r );
Test.expect( locate(arr,r+']')===false , "find element not existing in array:"+r+"]" );
Test.expect( locate(arr,'microsoft')===false , "finded element that not exist - microsoft" );
Test.expect( locate(arr,'object')===false , "finded element that not exist - object" );
Test.expect( locate(arr,'array')===false , "finded element that not exist - array" );