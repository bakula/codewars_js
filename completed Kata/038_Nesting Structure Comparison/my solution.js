Array.prototype.sameStructureAs = function (other) {
    return  JSON.stringify(this).replace(/"[^"]*[\[\]][^"]*"/g,'""').replace(/[^\[\]\,]/g,'') === JSON.stringify(other).replace(/"[^"]*[\[\]][^"]*"/g,'""').replace(/[^\[\]\,]/g,'') ;
};