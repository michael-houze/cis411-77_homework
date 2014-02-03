function insertValue(text)
{
	var input = document.getElementById("inputBox");
	input.value += text;
}

function setValue(text)
{
	var input = document.getElementById("inputBox");
	input.value = text;
}

function checkEmail() 
{
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value))
    {
    	alert('Please provide a valid email address');
    }
}
