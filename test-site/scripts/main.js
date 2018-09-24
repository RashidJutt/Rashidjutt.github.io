/*var myHeading=document.querySelector('h1');
myHeading.textContent='Hello World';
console.log("3"+"3");

var icecreame="chocolate"
if(icecreame==="chocolate"){
    console.log("Yah I love chocolate");


}

var linkTag=document.querySelector('a');
linkTag.textContent="Link to my Upwork Account";

function multy(num1,num2){
    var result=num1*num2;
return result;
}

var ans= multy( 2,3);
console.clear();
console.log(ans);

var imageTag=document.querySelector('img');

imageTag.onclick=function(){
        var mySource=imageTag.getAttribute('src');
        if(mySource==='images/firefox-logo.png'){
            imageTag.setAttribute('src','images/firefox2.png');

        }else{
            imageTag.setAttribute('src','images/firefox-logo.png');
        }
}


myHeading.onclick=function(){
    var headingContent=myHeading.textContent;
    if(myHeading.textContent==='Mozila is cool'){
        myHeading.textContent="I love Mozila";
    }
    else{
        myHeading.textContent="Mozila is cool";
    }
}

*/
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
    var myName=prompt("Please provide user name");
    localStorage.setItem('name',myName);
    myHeading.innerHTML='Mozila is cool '+myName;
}

if(!localStorage.getItem('name')){
   setUserName();    
}else{
    var storedNam=localStorage.getItem('name');
    myHeading.innerHTML="Mozila is cool " + storedNam;
}

document.querySelector('button').onclick=function(){
    setUserName();
}