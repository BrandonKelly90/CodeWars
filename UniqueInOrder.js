var uniqueInOrder=function(iterable){
  var itemList = [];
  var previousItem;

  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      itemList.push(iterable[i]);
    }
  }
  return itemList;
}
