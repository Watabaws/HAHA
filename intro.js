/*
Adam Abbas and Holden Higgins - HAHA
SoftDev1 pd7
K16 -- DOMinating JS
2017-12-11
*/

var fib_num = 1; //Counter for fibonacci
var edig = 0; //Counter for e
var ctr = 8; //Counter for list items

var button_push = function(e){
  var list = document.getElementById('thelist'); //Get the list to add to
  var li = document.createElement("li"); //Create an item
  //console.log(li);
  li.innerHTML = "Item " + ctr; //Give the item life
  ctr++; //Counter goes up
  li.addEventListener("mouseover", hoverFunk); //Give the li hover powers
  li.addEventListener("mouseout", backToNorm); //Give the li return to norm powers
  li.addEventListener("click", outtaDaDOM); //Give the li a kryptonite
  list.appendChild(li); //GIve the li life
}


var button = document.getElementById('b'); //Get the button by its id
button.addEventListener('click', button_push); //Give the button the powers

var hoverFunk = function(e){ //function to change header when hovered
  var heading = document.getElementById('h'); //Get heading
  heading.innerHTML = this.innerHTML; //Set heading to innerHTML of element hovered over
}
var backToNorm = function(e){ //Reset Heading
  var heading = document.getElementById('h'); //Get the heading
  heading.innerHTML = "Hello World!"; //Set heading to Hello World
}
var outtaDaDOM = function(e){ //Click to remove function
  this.remove(); //gitem out
  //  ctr--
}

var listItems = document.getElementsByTagName("li"); //All the currently existing list items
for(var i = 0; i < listItems.length; i++){ //Loop through them
  listItems[i].addEventListener("mouseover", hoverFunk); //Function to hover
  listItems[i].addEventListener("mouseout", backToNorm); //Function to unhover
  listItems[i].addEventListener("click", outtaDaDOM); //Function to killit
}

var fibonacci = function(last, nextToLast){ //Fibonacci function
    if(n <= 2){
        return 1;
    }
    else{
        return fibonacci(n) + fibonacci(n-2);
    }
}

var fibSeq = [0, 1]

var addFib = function(){
  var lisht = document.getElementById("fibList");
  var fibLi = document.createElement("li")

  fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2])
  fibLi.innerHTML = fibSeq[fibSeq.length-1];
  lisht.appendChild(fibLi);
}

var the_e = function(){
  edig++;
  return Math.pow((1 + (1/edig)), edig);
}

var addE = function(){
  var lisht = document.getElementById("elist");
  var eLi = document.createElement("li");
  eLi.innerHTML = the_e();
  lisht.appendChild(eLi);
}

var button2 = document.getElementById("c");
button2.addEventListener("click", addFib);

var ebutton = document.getElementById("e");
ebutton.addEventListener("click", addE);
