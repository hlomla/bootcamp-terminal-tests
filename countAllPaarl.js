module.exports = function(str){
    var count = str.split(',');
    var paarlAll = [];
    for (var i = 0; i < count.length; i++) {
      var regStr = count[i].trim()
      if (regStr.startsWith('CJ')) {
        paarlAll.push(regStr);
  
      }
    }
    return paarlAll.length
}