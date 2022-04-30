function myFunction() 
{
   document.getElementById("News").style.display = "block";
    document.getElementById("Press").style.display = "none";
  
}
  function myFunction1() 
{
    document.getElementById("Press").style.display = "block";
    document.getElementById("News").style.display = "none";
}

function showPopUp()
{
  if(sessionStorage.getItem('#popup')!=='true')
{
  $('#popup').modal('show');
  sessionStorage.setItem('#popup',true);
  
}
}
setTimeout(showPopUp,10000);



