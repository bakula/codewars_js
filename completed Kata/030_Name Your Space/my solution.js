function namespace(root, path, value){
  console.log(root);
  console.log( path);
  console.log( value);
  
  var paths = path.split('.');
  var isGet = (typeof value === 'undefined');
  var myroot = root;
  for(var i = 0; i<paths.length-1;i += 1){
    var step = paths[i];
    if(isGet){
      if(typeof myroot[step] === 'undefined'){
        return ;  
      }else{
        myroot = myroot[step];
      }
    }else{
      if(typeof myroot[step] === 'undefined'){
        myroot[step] = {};  
      }
        myroot = myroot[step];
    }
  }
  if(!isGet){
    myroot[paths[paths.length-1]] = value;
  }
  
  return root;
    
  
}
