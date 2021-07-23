module.exports = function(year){
    console.log(year)
   var date = new Date();
    console.log(date)
    var years = date.getFullYear();
    console.log(years)
  return years - year
}