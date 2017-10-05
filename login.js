function validate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value; 
	if ( username == "Sarthak" && password == "Sarthak")
	{
	alert ("Login successful");
	window.location.href = "name.html"; 
	return false;
	}
	else if(username.value.length==0 && password.value.length==0)
	{
		alert("Enter all fields");
		return false;
	}
	else
	{
		alert("Try Again");	
	}
}