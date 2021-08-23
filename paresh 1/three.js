var a=parseInt(prompt("enter a number"));
var b=parseInt(prompt("enter a number"));
var c=parseInt(prompt("enter a number"));
if(a<b)
{
    if(a<c)
    {
       alert("A is greater");
    }
    else
    {
    alert("B is greater");
    }
}
else
    {
    alert("C is greater");
}


var q=["paresh", "shashank", "bhavesh"];
var a=prompt("enter your name");
if (q.includes(a))
{
    alert("welcome to you");
}
else
{
    alert("get out");
}

var q=parseInt(prompt("enter a sample number for action"));
if(q<9&&q>3)
{
    alert("congratulations you have selected");
}
else{
    alert("please try again after some time");
}