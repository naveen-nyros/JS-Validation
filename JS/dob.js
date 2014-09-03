
d,lhours,lminutes,lseconds,d1,fhours,fminutes,fseconds; 
/* Automation of filling Date of birth and countries */
function fillup()

{
document.getElementById("demo").innerHTML=0+"%";
document.getElementById("countries").selectedIndex=0;
dob();
countries();
loadtime();


}

/*function for filling day and month and year drop-down list*/
function dob()

{

var day=document.getElementById("day");

var months=document.getElementById("month");

var year=document.getElementById("year");

var montharray=["Jan","Feb","March","April","may","June","July","Aug","Sep","Oct","Nov","Dec"];

var len=montharray.length;

for(var i=0;i<len;i++)

{

var option = document.createElement("option");

option.text = montharray[i];
months.add(option);

}


for(var i=1;i<=31;i++)

{

var option = document.createElement("option");

option.text = i;

day.add(option);

}

for(var i=1980;i<=2020;i++)

{

var option = document.createElement("option");

option.text = i;
year.add(option);

}

}	

/* function for filling countries */
function countries()

{

var countries=document.getElementById("countries");

var counlist=["india","China"," United States","Indonesia Brazil","Pakistan","Nigeria","Bangladesh","Russia", "Mexico" ,"Philippines","Ethiopia", "Vietnam", "Egypt","Germany","Iran"];	

var len1=counlist.length;


for(var i=0;i<len1;i++)

{

var option = document.createElement("option");

option.text = counlist[i];
countries.add(option);

}	 
}	
/* function for filling load time*/
function loadtime()
{
 d = new Date();

 lhours = d.getHours(); 
 lminutes = d.getMinutes(); 
 lseconds = d.getSeconds(); 

//alert(lhours+ "hours" +lminutes+ "minutes" +lseconds+ "seconds");
}
/* function for filling finish time*/	
function finishtime()
{
 d1 = new Date();
 fhours = d1.getHours(); 
 fminutes = d1.getMinutes(); 
 fseconds = d1.getSeconds(); 
if(lhours==fhours)
 fhours=lhours-fhours;	
 else if(lhours>fhours)
 fhours=24-lhours+fhours; 
   else
  fhours=fhours-lhours;
 //alert("hours"+fhours); 



//for minutes 
if(lminutes==fminutes)
 fminutes=lminutes-fminutes;	
 else if(lminutes>fminutes)
 fminutes=60-lminutes+fminutes; 
   else
  fminutes=fminutes-lminutes;
//  alert("minutes"+fminutes); 
//for seconds 
if(lseconds==fseconds)
 fseconds=lseconds-fseconds;	
 else if(lseconds>fseconds)
 fseconds=60-lseconds+fseconds; 
   else
  fseconds=fseconds-lseconds;
//alert("seconds"+fseconds); 


if((fhours==0)&&(fminutes>0)&&(fseconds>0))
alert("User Takes"+ "   "+fminutes+   ":minutes"    +  "    "  +fseconds+   "  "    +":seconds" +    "    "   +  "to fill the form");
else if((fhours==0)&&(fminutes==0)&&(fseconds>0))
alert("User Takes"+  "    "  +fseconds+   "  "    +":seconds" +    "    "   +  "to fill the form");
else if((fhours>0)&&(fminutes>0)&&(fseconds>0))
alert("User Takes"+ "    "+fhours+"   "+"hours"+ "  "+"   "+fminutes+   ":minutes"    +  "    "  +fseconds+   "  "    +":seconds" +    "    "   +  "to fill the form");
}





