var parent_star_1 = document.getElementById("parent_star_1");
var parent_1 = document.getElementsByClassName("parent_1")[0];
var btn_1 = document.getElementById("btn_1");
var a_1 = document.getElementById("a_1"); 
var drop_1 = document.getElementById("drop_1");
btn_1.onclick = function(){
    console.log(parent_1); 
	console.log(a_1);
	var parent_1_clone = parent_1.cloneNode(true);
	console.log(parent_1_clone);
	parent_star_1.insertBefore(parent_1_clone,parent_1);
};



var parent_star_2 = document.getElementById("parent_star_2");
var parent_2 = document.getElementsByClassName("parent_2")[0];
var btn_2 = document.getElementById("btn_2");
var a_2 = document.getElementById("a_2"); 
var drop_2 = document.getElementById("drop_2");
btn_2.onclick = function(){
    console.log(parent_2); 
	console.log(a_2);
	var parent_2_clone = parent_2.cloneNode(true);
	console.log(parent_2_clone);
	parent_star_2.insertBefore(parent_2_clone,parent_2);
};




var parent_star_3 = document.getElementById("parent_star_3");
var parent_3 = document.getElementsByClassName("parent_3")[0];
var btn_3 = document.getElementById("btn_3");
var a_3 = document.getElementById("a_3"); 
var drop_3 = document.getElementById("drop_3");
btn_3.onclick = function(){
    console.log(parent_3); 
	console.log(a_3);
	var parent_3_clone = parent_3.cloneNode(true);
	console.log(parent_3_clone);
	parent_star_3.insertBefore(parent_3_clone,parent_3);
};



var parent_star_4 = document.getElementById("parent_star_4");
var parent_4 = document.getElementsByClassName("parent_4")[0];
var btn_4 = document.getElementById("btn_4");
var a_4 = document.getElementById("a_4"); 
var drop_4 = document.getElementById("drop_4");
btn_4.onclick = function(){
    console.log(parent_4); 
	console.log(a_4);
	var parent_4_clone = parent_4.cloneNode(true);
	console.log(parent_4_clone);
	parent_star_4.insertBefore(parent_4_clone,parent_4);
};












/*var index = 2;
var drop_down_1 = document.getElementById("drop_down_1");
var button_1 = document.getElementById("btn_1");
var parent_1 = document.getElementById("parent_1");
var a_1 = document.getElementById("a_1");
button_1.onclick = function(){
	//alert('hellow');
	//console.log('hp');
	console.log(drop_down_1);
	console.log(a_1);
	var a_1_clone = a_1.cloneNode(true);
	var drop_down_1_clone = drop_down_1.cloneNode(true);
	a_1_clone.id = "a_" + index;
	drop_down_1_clone.id = "drop_down_" + index;
	parent_1.appendChild(a_1_clone);
	parent_1.appendChild(drop_down_1_clone);
	index = index + 1;
}*/

