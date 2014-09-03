

i=0,j=0,k=0,l=0,m=0,n=0,p=0,q=0,r=0,s=0,qq=0,qqq=0,t=0;

	

/*USERNAME VALIDATION*/
function prounamevalidation()

{

var check=usernamevalidation();
var progress=document.getElementById("progress");
if(check==true&&i==0) 

{

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
i=1;
 if(progress.value==100)
document.getElementById("success").style.display = "block";

}

else
 
 {

if((check==false)&&(progress.value>0)&&(i==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
i=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 

}

}

}


/*PASSWORD VALIDATION*/



function propwdvalidation()

{

var check=passwordvalidation();
var progress=document.getElementById("progress");

if((check==true)&&(j==0))

 {

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
j=1;
if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none"; 
 }

else
  
{

if((check==false)&&(progress.value>0)&&(j==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
j=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 

}

}

}




/*fnamevalidation for progress bar*/

function profnamevalidation()

{

var check=firstnamevalidation();

var progress=document.getElementById("progress");

if((check==true)&&(k==0))

 {

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
k=1;
if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none"; 
 }

else
  
{

if((check==false)&&(progress.value>0)&&(k==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
k=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 

}

}

}




/*lnamevalidation for progress bar*/

function prolnamevalidation()

{

var check=lastnamevalidation();

var progress=document.getElementById("progress");

if((check==true)&&(l==0))

 {

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
l=1;
if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none"; 
 }

else
  
{

if((check==false)&&(progress.value>0)&&(l==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
l=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 

}

}

}















/*phonevalidation for progress bar*/

function prophonevalidation()

{

var check= phonenovalidation();

var progress=document.getElementById("progress");

if(check==true&&m==0) 

{

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
m=1;
if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none"; 
}

else
 
 {

if((check==false)&&(progress.value>0)&&(m==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
m=0;

if(progress.value!=100)
document.getElementById("success").style.display = "none"; 

}

}

}


/*picvalidation for progress bar*/


function propicvalidation()

{

var check= profilepicvalidation();

var progress=document.getElementById("progress");

if(check==true&&n==0) 

{

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
n=1;

 if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none"; 
}

else
 
 {

if((check==false)&&(progress.value>0)&&(n==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
n=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 


}

}

}

/*gendervalidation for progress bar*/


function progendervalidation()

{

var check= checkgender();

var progress=document.getElementById("progress");

if(check==true&&p==0) 

{

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
p=1;

 if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none"; 
}

else
 
 {

if((check==false)&&(progress.value>0)&&(p==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
p=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 


}

}

}




/*dobvalidation for progress bar*/
function prodobvalidation()

{


var check= dobvalidation();

var progress=document.getElementById("progress");

if(check==true&&t==0) 

{

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
t=1;
if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none";  
}

else
 
 {

if((check==false)&&(progress.value>0)&&(t==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
t=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 


}

}

}




















  /*day validation*/

/*function prodayvalidation()

{


var check= dayvalidation();

var progress=document.getElementById("progress");

if(check==true&&q==0) 

{

progress.value=progress.value+3;

document.getElementById("demo").innerHTML=progress.value+"%";
q=1;

 
}

else
 
 {

if((check==false)&&(progress.value>0)&&(q==1))

{

progress.value=progress.value-3;

document.getElementById("demo").innerHTML=progress.value+"%";
q=0;


}

}

}*/


/*dobvalidation for progress bar*/

  /*month validation*/

/*function promonthvalidation()

{


var check= monthvalidation();

var progress=document.getElementById("progress");

if(check==true&&qq==0) 

{

progress.value=progress.value+3;

document.getElementById("demo").innerHTML=progress.value+"%";
qq=1;

 
}

else
 
 {

if((check==false)&&(progress.value>0)&&(qq==1))

{

progress.value=progress.value-3;

document.getElementById("demo").innerHTML=progress.value+"%";
qq=0;


}

}

}*/



/*dobvalidation for progress bar*/

  /*year validation*/
/*
function proyearvalidation()

{



var check= yearvalidation();

var progress=document.getElementById("progress");

if(check==true&&qqq==0) 

{

progress.value=progress.value+3;

document.getElementById("demo").innerHTML=progress.value+"%";
qqq=1;

 
}

else
 
 {

if((check==false)&&(progress.value>0)&&(qqq==1))

{

progress.value=progress.value-3;

document.getElementById("demo").innerHTML=progress.value+"%";
qqq=0;


}

}

}*/

/*prohobbies*/

function prohobbiesvalidation()

{

var check= hobbiesvalidation();

var progress=document.getElementById("progress");

if(check==true&&s==0) 

{

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
s=1;
if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none";  
}

else
 
 {

if((check==false)&&(progress.value>0)&&(s==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
s=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 

}

}

}


















/*countreis validation for progress*/

function procountriesvalidation()

{

var check=countriesvalidation();
var progress=document.getElementById("progress");

if(check==true&&r==0) 

{

progress.value=progress.value+10;

document.getElementById("demo").innerHTML=progress.value+"%";
r=1;

 if(progress.value==100)
document.getElementById("success").style.display = "block";
else
document.getElementById("success").style.display = "none"; 
}

else
 
 {

if((check==false)&&(progress.value>0)&&(r==1))

{

progress.value=progress.value-10;

document.getElementById("demo").innerHTML=progress.value+"%";
r=0;
if(progress.value!=100)
document.getElementById("success").style.display = "none"; 


}

}

}


