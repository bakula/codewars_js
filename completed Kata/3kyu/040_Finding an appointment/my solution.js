function getStartTime(schedules, duration) {
  var graph = [];
  var txtToIdx = function(txt){
    var a = txt.split(":");  
    return parseInt(a[0])*60+parseInt(a[1]);
  }

    var paint = function(shedule){
    
    for(var k = 0;k<shedule.length;k++){
      var s = txtToIdx(shedule[k][0]);
      var e = txtToIdx(shedule[k][1]);
      for(var i2 = s;i2<e;i2++){
        graph[i2-540] = '1';
      }
    }  
  }
  

  
  for(var i = 0;i<600;i++){
    graph.push('0');
  }

    for(var i1 = 0;i1<schedules.length;i1++){
      paint(schedules[i1]);
    }
    

  var sum = 0;
  var w = 0;
  for(var i = 0;i<600;i++){
    if(graph[i]==='1'){
      sum = 0;  
    }
    if(graph[i]==='0'){
      if(sum === 0){
        var w = i+540;  
      }
      sum++;
      if(sum === duration){
        
        var h = Math.floor(w/60);
        var s = w-h*60;
        if(s<10){s='0'+s}
        if(h<10){h='0'+h}
        return h+':'+s;
      }
    }
    
  }
  return null;
}