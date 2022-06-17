// verify the fields have data entered or selected
// validate text input elements contain data longer than one char
function validate() {

    // first name
    if( document.myForm.firstName.value == "" )
    {
        alert( "Please provide your first name!" );
        document.myForm.firstName.focus();
        return false;
    } else if(document.myForm.firstName.value.length < 2){
        alert("Your first name must be more than 1 character.");
        document.myForm.firstName.focus();
        return false;
    }

    // last name
    if( document.myForm.lastName.value == "" )
    {
        alert( "Please provide your last name!" );
        document.myForm.lastName.focus() ;
        return false;
    } else if(document.myForm.lastName.value.length < 2){
        alert("Your last name must be more than 1 character.");
        document.myForm.lastName.focus();
        return false;
    }

    // address
    if(document.myForm.address.value == "")
    {
        alert("Please provide your address!");
        document.myForm.address.focus();
        return false;
    } else if(document.myForm.address.value.length < 2){
        alert("Your address must be more than 1 character.");
        document.myForm.address.focus();
        return false;
    }

    if(document.myForm.city.value == "")
    {
        alert("Please provide your city!");
        document.myForm.city.focus();
        return false;
    } else if(document.myForm.city.value.length < 2){
        alert("Your city must be more than 1 character.");
        document.myForm.city.focus();
        return false;
    }

    if( document.myForm.state.value == "-1" )
    {
        alert( "Please provide your state!" );
        return false;
    }

    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
       document.myForm.Zip.value.length != 5 )
    {
        alert( "Please provide a zip in the format #####." );
        document.myForm.Zip.focus() ;
        return false;
    }

    // validate phone number was typed in, at least 9 numbers (and numbers only)
    if( document.myForm.phone.value == "" || isNaN(document.myForm.Zip.value) || myForm.phone.value.length < 10)
    {
        alert("Please 10-digit phone number starting with the area code.");
        document.myForm.phone.focus();
        return false;
    }

    var x = document.getElementById("phoneType1").checked;
    var y = document.getElementById("phoneType2").checked;

    if(x == false && y == false){
        alert("Please choose a phone type.");
        document.myForm.phone.focus();
        return false;
    }

    if( document.myForm.EMail.value == "" )
    {
        alert( "Please provide your Email!" );
        document.myForm.EMail.focus() ;
        return false;
    } else if(document.myForm.EMail.value.length < 2){
        alert("Your EMail must be more than 1 character.");
        document.myForm.EMail.focus();
        return false;
    }

    return( true );
}

// validate email contains '@' followed by at least one char, and a '.' followed by at least one character.
function validateEmail()
{
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 ) || dotpos == emailID.length-1)
    {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus() ;
        return false;
    }
}
