/*
Adam Abbas and Holden Higgins - HAHA
SoftDev1 pd7
K16 -- DOMinating JS
2017-12-11
*/

var fib_num = 1;
var ctr = 8;

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
  //  ctr--
}

var listItems = document.getElementsByTagName("li");
for(var i = 0; i < listItems.length; i++){
  listItems[i].addEventListener("mouseover", hoverFunk);
  listItems[i].addEventListener("mouseout", backToNorm);
  listItems[i].addEventListener("click", outtaDaDOM);
}

var fibonacci = function(n){
    if(n <= 2){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

var addFib = function(){
  var lisht = document.getElementById("fibList");
  var fibLi = document.createElement("li")
  fibLi.innerHTML = fibonacci(fib_num);
  fib_num++;
  lisht.appendChild(fibLi);
}

var button2 = document.getElementById("c");
button2.addEventListener("click", addFib);
