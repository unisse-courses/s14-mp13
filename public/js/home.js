function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "View All"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "View Less"; 
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "View All"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "View Less"; 
      moreText.style.display = "inline";
    }
  }

  // STOPS ALL VIDEOS 
  $(function(){
    $('.modal').on('hidden.bs.modal', function (e) {
      $iframe = $(this).find("iframe");
      $iframe.attr("src", $iframe.attr("src"));
    });
  });

// PASSWORD VALIDATION 
var password = document.getElementById("pword");
var confirmPassword = document.getElementById("cpword");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords Don't Match");
  } else {
    confirmPassword.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
