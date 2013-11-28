/* n.b. the Process class from the description is preloaded. */

function makeProcessTree(processes) {
  /* TODO: Implement this. */
  processes.sort(function(a,b){return a.ppid*1000000+a.pid - b.ppid*1000000-b.pid });
  
  var iterate = function(idx){
    var ret = [];
    var pid = processes[idx].pid;
    for(var i = idx;i<processes.length;i++){
      if(processes[i].ppid===pid){
        ret.push(new Process(processes[i].pid,iterate(i)));
      }  
    }
    return ret;
  }
  return new Process(processes[0].pid,iterate(0));
}