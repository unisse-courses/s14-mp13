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
      // STOPS ALL VIDEOS
      $('.modal').on('hidden.bs.modal', function (e) {
        $iframe = $(this).find("iframe");
        $iframe.attr("src", $iframe.attr("src"));
      });

      // at least 1 checked
      $('#reserve').click(function() {
       
        checked = $('input[name="seats"]:checked').length;
        checkedd = $('input[name="seats"]:checked');

        disabled = $('input[name="seats"]:disabled');

        if(!checked) {
          alert("You must reserve at least one seat.");
          return false;
        }

        // else if(checked)
        //   $('input[name="seats"]:disabled');

      });

    // POST called for registration
    $('#addUser').click(function() {
      // Get the data from the form
      var utype = $("#utype option:selected").val(); // Text of the selected value
      var uname = $('#uname').val();
      var fname = $('#fname').val();
      var lname = $('#lname').val();
      var mnum = $('#mnum').val();
      var email = $('#email').val();
      var pword = $('#pword').val();

      var newUser = {
        utype: utype,
        uname: uname,
        fname: fname,
        lname: lname,
        mnum: mnum,
        email: email,
        pword: pword
      };

      $.post('/register', newUser, function(data, status) {
        console.log(data);

        if (data.success) {
          $('#msg').text(data.message);
          $('#msg').removeClass('fail');
          $('#msg').addClass('success');

          $('#utype').val('');
          $('#uname').val('');
          $('#fname').val('');
          $('#lname').val('');
          $('#email').val('');
          $('#pword').val('');
          alert("Successfully registered! You may now log in.");
        } else {
          $('#msg').text(data.message);
          $('#msg').removeClass('success');
          $('#msg').addClass('fail');
          //alert("Registration failed!");
        }

      });
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

