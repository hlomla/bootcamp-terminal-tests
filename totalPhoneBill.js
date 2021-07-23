module.exports = function(str){
    var bill = str.split(', ');
  var total = 0;
    for(var i = 0; i < bill.length; i++) {
     if(bill[i] === 'call') {
      total+= 2.75 
    }
    else if (bill[i] === 'sms') {
          total+= 0.65
        } 
  
      } 
      return 'R' + total.toFixed(2);
}