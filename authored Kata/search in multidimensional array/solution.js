var locate = function(arr,value){
  for(var i = 0;i<arr.length;i++){
    if( Object.prototype.toString.call(arr[i]) === '[object Array]'){
      for(var i1=0;i1<arr[i].length;i1++){
        arr.push(arr[i][i1]);
      }
    }else{
      if(arr[i]===value){
        return true;  
      }  
    }
  }
  return false; 
}