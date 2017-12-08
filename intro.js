ctr = 8;

var button_push = function(e){
  var list = document.getElementById('thelist');
  var li = document.createElement("li");
  console.log(li);
  li.innerHTML = "Item " + ctr;
  ctr++;
  li.addEventListener("mouseover", hoverFunk);
  li.addEventListener("mouseout", backToNorm);
  li.addEventListener("click", outtaDaDOM);
  list.appendChild(li);
}


var button = document.getElementById('b');
button.addEventListener('click', button_push);

var hoverFunk = function(e){
  var heading = document.getElementById('h');
  heading.innerHTML = this.innerHTML;
}
var backToNorm = function(e){
  var heading = document.getElementById('h');
  heading.innerHTML = "Hello World!";
}
var outtaDaDOM = function(e){
  this.remove();
}

var listItems = document.getElementsByTagName("li");
for(var i = 0; i < listItems.length; i++){
  listItems[i].addEventListener("mouseover", hoverFunk);
  listItems[i].addEventListener("mouseout", backToNorm);
  listItems[i].addEventListener("click", outtaDaDOM);
}
