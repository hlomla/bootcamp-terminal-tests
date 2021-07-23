module.exports = function(itemsList){
    var items20 =  [];
  
    for (var i = 0; i < itemsList.length; i++)
    {
  var List = itemsList[i];
    if(List.qty > 20) {
      items20.push(List);
    }
  }
  return items20
}