module.exports = function(itemsList, twenty){
    var items = [];
    for (var i = 0; i < itemsList.length; i++) {
      var list_ = itemsList[i];
      if(list_.qty > twenty) {
        items.push(list_)
      }
    }
    return items
}