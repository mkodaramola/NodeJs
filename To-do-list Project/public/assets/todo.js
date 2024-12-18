$(document).ready(function(){

  $('form').on('submit',function(){

    var item = $('form input');
    var td = {item: item.val()};

    $.ajax({

      type: 'POST',
      url: '/home',
      data: td,
      success: function(data){
        location.reload();
      }

    });

  });

  $('li').click(function(){

    var item = $(this).text().replace(/ /g,"-");

    $.ajax({
      type: 'DELETE',
      url: '/home/'+item,
      success: function(data){
        location.reload();
      }
    });
  });


});
