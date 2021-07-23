module.exports = function(str, town){
    var countAll = str.split(',');
    var fromTown = [];
    for(var i = 0; i < countAll.length; i++) {
      if(countAll[i].trim().startsWith(town)) {
        fromTown.push(countAll[i].trim());
      }
    } 
    return fromTown.length
}