/* Add your JavaScript to this file */

window.onload = function(){

    var my_func = function(event) {
    event.preventDefault();
    // window.history.back();
    var email = document.getElementById("email").value;
    console.log(email);
    var output = document.getElementsByClassName("message")[0];
    if(email != ""){
        output.innerHTML = "Thank You! Your email " + email + " has been added to our mailing list!";
    }else{
        output.innerHTML = "Please enter valid email address";
    }
    
};

    var butn = document.getElementsByTagName("button")[0];

    butn.addEventListener("click", my_func, true);
}