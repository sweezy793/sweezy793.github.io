function validate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value; 
	if ( username == "Sarthak" && password == "Sarthak")
	{
	alert ("Login successful");
	window.location.href = "https://sweezy793.github.io/name"; 
	
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
