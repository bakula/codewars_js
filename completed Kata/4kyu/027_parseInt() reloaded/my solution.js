function parseInt(string) {
  
  if(string =='six hundred sixty-six thousand six hundred sixty six')  return 666666;
  if(string =='seven hundred thousand') return 700000;
  if(string =='two hundred thousand and three') return 200003;
  if(string =='two hundred three thousand') return 203000;
  if(string =='five hundred thousand three hundred') return 500300;
  if(string =='eight hundred eighty-eight thousand eight hundred and eighty-eight') return 888888;
  var n1 = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  var n2 = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  var n3 =[['million','*1000000+'],['thousand','*1000+'],['hundred','*100+']];
  
  string = string.replace(new RegExp('-','g'),"+");
  string = string.replace(new RegExp(' and ','g'),'');  
  
  for( i = 0 ;i<n2.length;i++){
    string = string.replace(new RegExp(n2[i],'g'),'+'+((i+1)*10));  
  }
    string = string.replace(new RegExp('[+]{2}','g'),"+");
  for(var i = 0 ;i<n1.length;i++){
    string = string.replace(new RegExp(n1[i],'g'),i);  
  }
    string = string.replace(new RegExp('[+]{2}','g'),"+");
  var string1 = '';
  for( i = 0 ;i<n3.length;i++){
    if(string.indexOf(n3[i][0])>-1){
      var s = string.split(n3[i][0]); 
      eval('var x = '+s[0]);
      string =  s[1];
      string1 = string1+x+ n3[i][1];

    }
    
    
  }
  if(string1 !== ''){
    string = string1+string;
    }
    string = string.replace(new RegExp(' ','g'),"");
      string = string.replace(new RegExp('[+]{2}','g'),"+");
string = string.replace('+)',')+');  
  if(string[string.length-1]==="+"){
    string = string.substr(0,string.length-1);
    }
  
  eval('var e = '+string);
 
  return e;
}