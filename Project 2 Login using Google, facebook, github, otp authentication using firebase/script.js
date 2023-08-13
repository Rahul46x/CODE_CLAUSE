 function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // Handle successful login
        var user = result.user;
        console.log(user);
        redirectToPage('https://www.linkedin.com/in/rahul-kumar-208a2b237');
      })
      .catch(function(error) {
        // error Handle
        console.log(error);
      });
  }

  function signInWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // Handle successful login
        var user = result.user;
        console.log(user);
        redirectToPage('https://www.linkedin.com/in/rahul-kumar-208a2b237');
      })
      .catch(function(error) {
        // error Handle
        console.log(error);
      });
  }

  function signInWithGitHub() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // Handle successful login
        var user = result.user;
        console.log(user);
        redirectToPage('https://www.linkedin.com/in/rahul-kumar-208a2b237/');
      })
      .catch(function(error) {
        // error Handle
        console.log(error);
      });
  }

  function signInWithOTP() {
    var num = document.getElementById('ph-num').value;
    var phoneNumber = "+91" + num; // Num replace with user phone number
    console.log(phoneNumber);
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // Otp sent successfully
        var verificationCode = prompt("Please enter the verification code sent to your phone.");
        return confirmationResult.confirm(verificationCode);
      })
      .then(function(result) {
        // Handle OTP login successful 
        var user = result.user;
        console.log(user);
        redirectToPage('https://www.linkedin.com/in/rahul-kumar-208a2b237');
      })
      .catch(function(error) {
        //  error Handle
        console.log(error);
      });
  }
  
  function redirectToPage(url) {
    window.location.href = url;
  }