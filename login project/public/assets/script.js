$(document).ready(function(){



  $('.field').keyup(function(){

    var usern = $('#usern').val();
    var passw = $('#passw').val();

    if(usern !== "" && passw !== ""){

      var con = {
        username:usern,
        password:passw
      }

      $.ajax({
        type: 'POST',
        url: '/login',
        data:con,
        complete: function(data){

        }

      });


    }



  });

$('#rform').on('submit',function(){

  var name = $('#iname').val();
  var age = $('#iage').val();
  var email = $('#iemail').val();
  var telephone = $('#itel').val();
  var username = $('#iusern').val();
  var passw = $('#ipw').val();
  var cpassw = $('#icpw').val();



  if(passw !== cpassw){
    alert('Two different password was entered');
  }
  else{
    var det = {
      name: name,
      age: age,
      email:email,
      telephone:telephone,
      username:username,
      password:passw

    }

    $.ajax({

      type: 'POST',
      url:'/signup',
      data: det,
      success: function(data){}

    });

  }



});




//end
});

// if(sv() == true) window.location.href="http://localhost:4000/details";
