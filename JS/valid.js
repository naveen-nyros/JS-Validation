

 count=0;
 valid=0;
day,month,year,dob,selected;
/* FUNCTION FOR CLOSING SUCCESS */
function closed()
{
document.getElementById("success").style.display="none";
}







/*function validation()

{
alert("validation");
 var v1=unamevalidation();

  var v2=pwdvalidation();

var v3=fnamevalidation()

var v4=lnamevalidation();

var v5=profilepicvalidation();

var v6=checkgender();

var v10=phonevalidation();


if(v1&&v2&&v3&&v4)
alert("submit successfully");
else
 alert("please fill all the feilds");

if(v1)
{



 if(v2)
  {
  if(v3)
    {
     if(v4)
      {
     alert("submit successfully");
      }
   else
    alert("last name is not valid")  
     }
  else
  alert("first name is not valid");
  }
  else
   alert("password is not valid");  
}    
else

alert(" user name is not valid plz fill it properly");


}*/

/* FUNCTION FOR FORM VALIDATION*/
function validation()
{

var v1=usernamevalidation();


if(v1==false)
{
return false;
}
var v2=passwordvalidation();
if(v2==false)
{
return false;
}
var v3=firstnamevalidation();
if(v3==false)
{
return false;
}
var v4=lastnamevalidation();
if(v4==false)
{
return false;
}
var v5=profilepicvalidation();
if(v5==false)
{
return false;
}
var v6=checkgender();
if(v6==false)
{
return false;
}
var v7=dayvalidation();
if(v7==false)
{
return false;
}
var v8=monthvalidation();
if(v8==false)
{
return false;
}
var v9=yearvalidation();
if(v9==false)
{
return false;
}

var v10= hobbiesvalidation();
if(v10==false)
{
return false;
}
var v11=countriesvalidation();
if(v11==false)
{
return false;
}
var v12=phonenovalidation();
if(v12==false)
{
return false;
}

//if((v1&&v2)&&(v3&&v4)&&(v5&&v6)&&(v7&&v8)&&(v9&&v10)&&(v11&&v12))
//{
//alert("form submitted");

//return 
//}
//else
//alert(" please fill all the fields");


else 
{

details(); /*DISPLAYING DEATAILS OF FILLED FORM */
finishtime();/* DISPLAYING HOWMUCH TIME THE USER SPENTS FOR FILLING THE DATA*/
return true;
}

}



/*USERNAME VALIDATION*/

function usernamevalidation() 
{ 

var uname=document.getElementById("uname").value;

var reg = /^((?:[A-z]+)[a-zA-Z0-9]{5,8})$/;

if(uname==""||uname.length<5||uname.length>8)  
{
var msg="Username should not be empty and it must be contains 5 to 8 charcters only";

	alert(msg);
  document.getElementById("uname").focus();

 document.getElementById("uname").select();


     return false;
}
else if(reg.test(uname) == false)
 
   {
	
var msg="Username must be contains alphanumeric characters";

	alert(msg);

        document.getElementById("uname").focus();

	document.getElementById("uname").select();
          return false;

    }
 
 else 
    
    { 
 
getusername(uname);
	
return true;

}

}





/*PASSWORD VALIDATION*/

function passwordvalidation()

{

var pwd=document.getElementById("pwd").value;

var reg = /^[a-zA-Z0-9]{6}$/;

if(reg.test(pwd) == false)
  
  {
	
var msg="Please Enter Valid Password (it must contains exactly 6 alphanumeric characters)";

	alert(msg);
	
document.getElementById("pwd").focus();
document.getElementById("pwd").select();

	return false;

    }

  else{
	getpassword(pwd);
return true;
}

}




/*FIRSTNAME VALIDATION*/

function firstnamevalidation()

{

var fname=document.getElementById("fname").value;

var reg = /^((?:[A-z]+)[a-zA-Z])$/;
 
if(fname==""||fname.length<2||fname.length>6)  
{
var msg=" Firstname  should not be empty and it must contains 2 to 6 charcters";

	alert(msg);
document.getElementById("fname").focus();

	document.getElementById("fname").select();
     return false;
}

else if(reg.test(fname) == false)
 
   {
	
var msg="FirstName must have  only characters";

	alert(msg);
        document.getElementById("fname").focus();

	document.getElementById("fname").select();
          return false;

    }
 
 else 
    
    {  
 getfirstname(fname);
	
return true;

}

}



/*LASTNAME VALIDATION*/

function lastnamevalidation()

{

var lname=document.getElementById("lname").value;

var reg = /^((?:[A-z]+)[a-zA-Z])$/;
 
if(lname==""||lname.length<2||lname.length>16)  
{
var msg="Lastname should not be empty and it must contains 2 to 16 charcters";

	alert(msg);
document.getElementById("lname").focus();

	document.getElementById("lname").select();
     return false;
}

else if(reg.test(lname) == false)
 
   {
	
var msg="LastName must have  only characters";

	alert(msg);
        document.getElementById("lname").focus();

 	document.getElementById("lname").select();
          return false;

    }
 
 else 
    
    {  
getlastname(lname);
	
return true;

}

}


/*PROFLIEPIC VALIDATION*/
function profilepicvalidation()

{
var img=document.getElementById("browse").value;

var value=img;

var patt1 = /.png/;
var patt2 = /.gif/;
var patt3 = /.jpeg/;
var patt4 = /.jpg/;

if(img=="")

{

alert("please select image");
 
document.getElementById("browse").focus();

return false;

}

else 
     if(patt1.test(value)==true||patt2.test(value)==true||patt3.test(value)==true||patt4.test(value)==true)

{
//alert("pic Upload Successfully");
getprofilepic(img);
return true;

}
alert(" it's a wrong format .please select .png (or) .gif (or) .jpg (or) .jpeg");

 document.getElementById("browse").focus();

return false;

}



/*GENDER VALIDATION*/

function checkgender()
{
var male=document.getElementById("male");

var female=document.getElementById("female");

if(male.checked==false&&female.checked==false)

{

alert("please check any one of these Male(or) Female");

return false;
male.focus();
}

if(male.checked==true)

{
 
female.checked==false;
getgender("male"+male.value);
return true;

}

else if(female.checked==true)
 
{

male.checked==false;
getgender("female"+female.value);
return true;

}


}






/* Date Of Birth validations*/
function dobvalidation()
{

if(dayvalidation()==true)
 {

if(monthvalidation()==true)
     { 
      if(yearvalidation()==true)
          { 
        //var x4=x1.selectedIndex.value+"-"+x2.selectedIndex.value+"-"x3.selectedIndex.value;
        //getdob(x4);
      dob=day.options[day.selectedIndex].value+"-"+month.options[month.selectedIndex].value+"-"+year.options[year.selectedIndex].value;
        getdob(dob);
        return true;
          }
        }   

 } 
return false;

}

/*day validation for DOB*/


function dayvalidation()

{

 day = document.getElementById("day");

if(day.selectedIndex=="")

  {

   
 alert(" Select Day ");
 document.getElementById("day").focus();


 return false;   
            
  }


else

{

 
return true;

}


}


/*month validation for DOB*/


function monthvalidation()

{

 month = document.getElementById("month");

if(month.selectedIndex=="")

  {
   alert("Select Month");

  document.getElementById("month").focus();
 
 
return false;  
             
  }

else

{

 
return true;

}


}

/*year validation for DOB*/


function yearvalidation()

{

 year = document.getElementById("year");

if(year.selectedIndex=="")
 
 {

   alert("Select Year");

document.getElementById("year").focus();
 
    
return false; 
              
  }

else

{

 
return true;

}

}


/* Hobbies validation */
 function hobbiesvalidation()
{
var h1=document.getElementById("h1");

var h2=document.getElementById("h2");

var h3=document.getElementById("h3");

var h4=document.getElementById("h4");

var h5=document.getElementById("h5");

var h6=document.getElementById("h6");

var hobbieslist = [];
if((h1.checked==false)&&(h2.checked==false)&&(h3.checked==false)&&(h4.checked==false)&&(h5.checked==false)&&(h6.checked==false))

{
alert("select  atleast one of the Hobbies given below");
h1.focus();
return false;
}
else
{

if(h1.checked==true)
{
hobbieslist.push("Painting");
i=1;
}

if(h2.checked==true)
{ 
hobbieslist.push("Singing");
i=1;
}

if(h3.checked==true)
{ 
hobbieslist.push("Travelling");
i=1;
}

if(h4.checked==true)
{
hobbieslist.push("Dancing");
i=1;
}


if(h5.checked==true)
{ 
hobbieslist.push("Gardening");
i=1;
}

if(h6.checked==true)
{ 
hobbieslist.push("Others");
i=1;
}

if(i==1)
{
gethobbies(hobbieslist);
return true;
}
else
 return false;
}

}


/*country validation*/

function countriesvalidation()

{

var sdvalues = [];

var countries= document.getElementById("countries");

if(countries.selectedIndex==0||countries.selectedIndex=="")

{

alert(" Select Atleast one of the country");

return false;

}


else

{ 

 var sdValues = [];
   for(var i = 1; i < countries.options.length; i++)
   {
      if(countries.options[i].selected == true)
      {
      sdValues.push(countries.options[i].value);
      }
   }
   getcountries(sdValues);
   return true;
}
}





/*PHONENUMBER VALIDATION*/
function phonenovalidation()

{


var phonenum=document.getElementById("phone").value;


var reg = /^[+]\s([0-9]{2})\s\(([0-9]{3})\)\-([0-9]{3})\-([0-9]{4})$/;

  if(reg.test(phonenum) == false)
 
   {
	
    var msg="Enter valid phonenumber like(+ 91 (888)-123-1234)";

	alert(msg);
	
return false; 

    }

  else
    {
      getphoneno(phonenum);
	return true;
  }
}

