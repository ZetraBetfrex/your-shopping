var button=document.getElementById("enter");
var input= document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");




// allows to delete button to work
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent);
  evt.target.parentNode.remove();
}

// allows to cut words only in lists and to remove word list

for(var i=0;i<deleteBtns.length;i++){
	deleteBtns[i].addEventListener("click", removeparent);
}

function getEventTarget(e){
	e=e || window.event ;
	return e.target || e.srcElement;
}
ul.onclick=function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

 
function len(){
	return input.value.length;
}

function list(){
var btn = document.createElement("button");
	btn.innerHTML = "x";
	btn.onclick = removeParent;


	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);


	ul.appendChild(li);
	input.value="";
}

function doClick(){
	if (len()>0){
 	list();	}
}

function dopress(event){
	if (len()>0 && event.keyCode === 13){

	 	list();		}
 	 }




button.addEventListener("click", doClick);
input.addEventListener("keypress",dopress);
