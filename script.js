var i = 0;
do 
{
var text = prompt("Please enter the text", "");
if ((text != null)&&i==0) {
    document.getElementById("demo").innerHTML =
    "<ul ID='list'><li>" + text + "</li></ul>";
	i++;
}
else{
if (text != "") {
    var newLi = document.createElement('li');
    newLi.innerHTML = text;
document.getElementById("list").appendChild(newLi);
}
else break;   

 
}
}
while(text != null);
