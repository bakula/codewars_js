function reverseWords(str) {
  // Go for it
  var rev = function(words,idx){
    var word = words[idx];
    var ret = '';
    for(var i1=0;i1<word.length;i1++){
      ret = word[i1]+ret;  
    } 
    return words[idx]= ret;
  }
  var w = str.split(' ');
  for(i=0;i<w.length;i++){
    rev(w,i);  
  }
  return w.join(' ');
}