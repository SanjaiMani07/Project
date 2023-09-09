let loginForm = document.getElementById("myform");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault() 
   {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    window.location.reload()
  }
});
