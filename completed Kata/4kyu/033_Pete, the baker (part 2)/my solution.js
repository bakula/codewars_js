function getMissingIngredients(recipe, added) {
  var v = function(value){
    value = parseFloat(value);
    if(isNaN(value)){
      value = 0;  
    }
    return value;
    
  }
  var multi = 1;
  for(key in added){
      multi = Math.max(multi, v(Math.ceil(v(added[key])/v(recipe[key]))))
  }
  var out = {};
  for(key in recipe){
    val = v(recipe[key])*multi -  v(added[key]);
      if(val>0){
        out[key] = val;
        }
  }
  return out;
}