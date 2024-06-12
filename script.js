
 /* Creating a variable to store the users password and email */

 const emailInput = document.getElementById('email') /* (Const) 'emailInput' varible is used to store users email  */
 const passwordInput = document.getElementById('Password')

 /* Event listeners are created to listen  to inputs of email and password */

 emailInput.addEventListener('input', validateEmail);
 passwordInput.addEventListener('input', validatePassword);


  /* creating the code that actually checks users inputs and validation */



/* the function referenced in the event listener is now being created and intialised by 'function'*/

  function validateEmail () {

    const isValidEmail = /^\S+@\S+\.\S+$/.test(emailInput.value);

    if (isValidEmail) {

        emailInput.parentElement.classList.remove('error');
        emailInput.parentElement.classList.add('success');

    } else {

    emailInput.parentElement.classList.remove('success')
    emailInput.parentElement.classList.add('error')

    }

  }


  function validatePassword() {
    const isValidPassword = passwordInput.value.length >= 6; // Example validation
    if (isValidPassword) {
        passwordInput.parentElement.classList.remove('error');
        passwordInput.parentElement.classList.add('success');
    } else {
        passwordInput.parentElement.classList.remove('success');
        passwordInput.parentElement.classList.add('error');
    }
}