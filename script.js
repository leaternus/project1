$("#count").text($("p").length);

$(".trash").click(
 function() {
   console.log ("click detecte") ;
   $(this).parent().remove();
   $("#count").text($("p").length);

 }
);

$("#btn-add").click(
 function() {
   console.log("ok");
  console.log($('#add-message').val()) ;

   $("body").append('<div id="divRaw" class= "row last-row"><img id="imgAvatar" src="avatar-5.jpg" class= "avatar" /> <div id="div"><h6>Léa Ternus</h6><p>'+ $('#add-message').val()+' </p></div><img id="imgTrash" src="trash.png" class= "trash"/></div>');
   $(".trash").click(
    function() {
      console.log ("click detecte") ;
      $(this).parent().remove();
      $("#count").text($("p").length);

    }
   );

   $("#count").text($("p").length);
   $('#add-message').val('');

 }

);

  $('#btn-search').click(function(){
     $('.row').show();
     $('h6').each(
     function(){
       if($("#search-message").val().length>0 && $(this).text() != $("#search-message").val()) {
                    $(this).parent().parent().remove();
                    $("#count").text($("p").length);


                  }
              }
           )
        }
     )
