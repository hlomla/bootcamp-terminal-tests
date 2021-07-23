module.exports = function(shift){
    if (shift ==='morning') {
        return 'R20';
    } if (shift ==='afternoon') {
     return 'R10';
        } if(shift === 'night') {
          return 'free';
      }
}