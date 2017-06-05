function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function deepestChild() {
  var list = document.getElementById('grand-node');
  var children = list.children[0]

 while(children)  {
   list = children
   children = list.children[0]
 }
 return list
}

function increaseRankBy(n) {
  var children = document.querySelectorAll('.ranked-list')

  for(var i = 0; i < children.length; i++) {
    children[i].innerHTML = (parseInt(children[i].innerHTML) + n).toString;
  }
  return children
}
