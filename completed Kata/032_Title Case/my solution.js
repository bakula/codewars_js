function titleCase(title, minorWords) {
  console.log('*'+title+'*');
  console.log('*'+minorWords+'*');
  var words = title.toLowerCase().split(" ");
  if(typeof minorWords === 'undefined'){
    minorWords = '';
  }
  var minor = " "+minorWords.toLowerCase()+" ";
  
  var correct = function(val){console.log('+'+val+'+');
    if(val === '')return val;
    if(minor.indexOf(' '+val+' ')===-1){
      return val[0].toUpperCase()+val.substr(1);
    } 
    return val;
  }
  var ret =  words.map(correct).join(" ");
  if(ret !== ''){
    ret = ret[0].toUpperCase()+ret.substr(1);  
  }
  
  console.log('$'+ret+'$');
  return ret;
}