  
      function validateEmail() {
         var emailID = document.form.EMail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.form.EMail.focus() ;
            return false;
         }
         return( true );
      }
   
function Validation()
{
var a = document.form.phone.value;
if(a=="")
{
alert("please Enter the Contact Number");
document.form.phone.focus();
return false;
}
if(isNaN(a))
{
alert("Enter the valid Mobile Number(Like : 9566137117)");
document.form.phone.focus();
return false;
}
if(a.length !=10)
{
alert(" Your Mobile Number must be 1 to 10 Integers");
document.form.phone.select();
return false;
}
}
function allLetter(a)
  {
    
   var letters = /^[A-Za-z_]+[0-9]+$/;
   if(a.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("Please enter correct format which either starts with 'alphabets or underscore");
     return false;
     }
  }
  function palindrome() { 
    var str = document.form.i1.value;
   var a = str.split('').reverse().join('');
   var b =str.localeCompare(a)
   if (b ==0)
   {
    alert("its a palindrome");
    return true;
   }
   else{
    alert("not a palindrome");
    return false;
   }
}
function anagram(s1, s2){
    var s1 = document.form2.i2.value;
    var s2 = document.form2.i3.value;
    var c = s1.toLowerCase().replace(" ", "").split("").sort().join("") === s2.toLowerCase().replace(" ", "").split("").sort().join("");
    if(c){
        alert("it  is anagram");
        return true
    }else
    {
        alert("not an anagram")
        return false
    }
}

function dis(val)
{
document.getElementById("edu").value+=val
 }


function solve()
{

let x = document.getElementById("edu").value
if(x.includes("√")) {
    let z = Math.sqrt(parseInt(x.replace("√", "")))
    document.getElementById("edu").value = (z.toFixed(3))
    return;
}
let y = eval(x)
document.getElementById("edu").value = y
}

function clr()
{
document.getElementById("edu").value = ""
}
function first()
{ 

    var first = Math.floor(Math.random() * 1000);
    first= (first%3);
    return first;
}
function sec()
{
    var sec =Math.floor(Math.random() * 1000);
    sec= (sec%3);
    return sec;
}
function result()
{
  
var a = first();

var b = sec();
c = a-b;
if(c==0)
{
    alert("match draw");
    return;
}
else if((a==0 && b==2)||(a==1 && b==0)||(a==2 && b==1)) {
    alert("1st player won the match");
    return;
}
else
{
    alert("2nd player won")
    return;
}
}