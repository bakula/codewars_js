describe('pickPeaks', function(){
  it('should support finding peaks', function(){
    Test.assertSimilar(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]}) 
  });

  it('should support finding peaks, but should ignore peaks on the edge of the array', function(){
    Test.assertSimilar(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]}) 
  });

  it('should support finding peaks; if the peak is a plateau, it should only return the position of the first element of the plateau', function(){
    Test.assertSimilar(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]}) 
  });

  it('should support finding peaks; if the peak is a plateau, it should only return the position of the first element of the plateau', function(){
    Test.assertSimilar(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]}) 
  });

  it('should support finding peaks, but should ignore peaks on the edge of the array', function(){
    Test.assertSimilar(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]}) 
  });  
  
  it('should support finding peaks, but should ignore peaks on the edge of the array', function(){
    Test.assertSimilar(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]}) 
  });
  
  it('should support finding peaks, despite the plateau', function(){
    Test.assertSimilar(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]}) 
  });    

  it('should support finding peaks', function(){
    Test.assertSimilar(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]}) 
  });

  it('should return an object with empty arrays if the input is an empty array',function(){
    Test.assertSimilar(pickPeaks([]),{pos:[],peaks:[]}) 
  });

  it('should return an object with empty arrays if the input does not contain any peak',function(){
    Test.assertSimilar(pickPeaks([1,1,1,1]),{pos:[],peaks:[]}) 
  });

});