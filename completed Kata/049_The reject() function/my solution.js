function reject(array, iterator) {
  return array.filter(function(idx){
    return !iterator(idx);
  });
}