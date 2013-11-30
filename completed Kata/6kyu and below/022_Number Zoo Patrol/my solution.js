function findNumber(array) {
  for(var i = 1;i<=array.length;i++){
    if(array.indexOf(i) === -1){
        return i;
      }  
  }
  return -1;
}