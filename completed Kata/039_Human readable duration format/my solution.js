function formatDuration (seconds) {
  var data = [
    {size:365*24*60*60,name1:'year',name2:'years'},
    {size:24*60*60,name1:'day',name2:'days'},
    {size:60*60,name1:'hour',name2:'hours'},
    {size:60,name1:'minute',name2:'minutes'},
    {size:1,name1:'second',name2:'seconds'},
    ];
  var out = [];
  for(var i = 0;i<data.length;i++){
    var v = Math.floor(seconds/data[i].size);
    if(v>0){
      if(v>1){
        out.unshift(v+' '+data[i].name2)
      }else{
        out.unshift(v+' '+data[i].name1)
      }
      seconds = seconds-v*data[i].size;
    }
  }
  if(out.length===0){return 'now';}
  if(out.length===1){return out[0];}
  if(out.length===2){return out[1]+' and '+out[0];}
  if(out.length===3){return out[2]+', '+out[1]+' and '+out[0];}
  if(out.length===4){return out[3]+', '+out[2]+', '+out[1]+' and '+out[0];}
  if(out.length===5){return out[4]+', '+out[3]+', '+out[2]+', '+out[1]+' and '+out[0];}
}