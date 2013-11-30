function User(){
  this.rank = -8;
  this.progress = 0;
  this.incProgress = function(value){
    if(value<-8 || value===0||value>8 || value!==parseInt(value)){
      throw 'bad value';  
    }
    if(value>-1){value--;}
    var _rank = this.rank;
    if(this.rank>-1){_rank--;}
    //var points[0,1,3,10*1*1,10*2*2,10*1*1,10*1*1,10*1*1,10*1*1,10*1*1,
    var diff = value - _rank;
    var points = 10*diff*diff;
    if(diff===0){   points = 3}
    if(diff===-1){  points = 1}
    if(diff<-1){    points = 0}
    this.progress += points;
    if(this.progress>100){
      var step = Math.floor(this.progress*.01);
        this.progress -= step*100;
        if(this.rank<0 && this.rank+step>=0){
          step ++;
        }
        this.rank +=step;
        this.rank = Math.min(8,this.rank);
        
    }
    if(this.rank===8){
          this.progress = 0
        }
  }
}