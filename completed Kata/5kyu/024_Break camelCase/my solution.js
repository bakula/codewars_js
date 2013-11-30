function solution(string) {
    var ret = '';
    for(var i = 0;i<string.length;i += 1){
      var c = string[i];
      if(c !== c.toLowerCase()){
        ret += ' ';
      }
      ret += c;
      
    }
    return ret;
}