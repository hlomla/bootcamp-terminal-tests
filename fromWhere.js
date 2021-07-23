module.exports = function(regNo){
    if(regNo.startsWith('CY')) {
        return 'Bellville';
      } if(regNo.startsWith('CJ')) {
        return 'Paarl';
      } if(regNo.startsWith('CA')) {
        return 'Cape Town';
      } else {
        return 'Some other place!';
      }
}