$('.item').draggable({
  cursor: "move"
  //revert: true,
  //revertDuration: 5000,
  //helper: "clone"   //This will keep a copy/clone of the dragged element at the initial position before drag
});

$('#box').droppable({
  drop: function(event, ui){
    $(this).css("border", "3px dashed gray");
  ////$('.item').draggable("disable");  //We then dissable the draggable feature for all items
    $('#check_button').click(function(){
      var draggable1 = ui.draggable;
      var currentID = ui.draggable.attr('id');   //Here we are looking for the id of the dragged and dropped item
      $(draggable1).appendTo("#dragItems2");
//////$( ".item" ).draggable( "destroy" ); //destroy to get rid of draggable1
      //$( ".item" ).draggable( "enable" ); //Enable draggable functionality back for the next item
      if(currentID == "item1.1" ){
        //alert("Excellent answer!!!");
        setTimeout(function(){
          $('#excellent_img').css({"visibility" : "visible"});
          $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
          $('#excellent_img').show(1).delay(800).hide(1);

          //Level 2 Questioning
          //##############################################################################
          $('#body_background').attr("src", "img/rubber.png");
          $('#check_button').css({"display": "none"});
          $('#check_button2').css({"display": "block"});
          $('#box').css({"display": "none"});
          $('#box2').css({"display": "block"});

          $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item

          $('#box2').droppable({
            drop: function(event, ui){
             $(this).css("border", "3px dashed gray");

             $("#check_button2").click(function(){
               var draggable2 = ui.draggable;
               var currentID2 = ui.draggable.attr('id');   //Here we are looking for the id of the dragged and dropped item
               $(draggable2).appendTo("#dragItems2");

               if(currentID2 == "item2.1" ){
                 setTimeout(function(){
                   $('#excellent_img').css({"visibility" : "visible"});
                   $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                   $('#excellent_img').show(1).delay(800).hide(1);

                   //Level 3 Questioning
                   //##############################################################################
                   $('#body_background').attr("src", "img/magnet.png");
                   $('#check_button2').css({"display": "none"});
                   $('#check_button3').css({"display": "block"});
                   $('#box2').css({"display": "none"});
                   $('#box3').css({"display": "block"});

                   $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item

                   $('#box3').droppable({
                     drop: function(event, ui){
                        $(this).css("border", "3px dashed gray");
                         $("#check_button3").click(function(){
                           var draggable3 = ui.draggable;
                           var currentID3 = ui.draggable.attr('id');   //Here we are looking for the id of the dragged and dropped item
                           $(draggable3).appendTo("#dragItems2");

                           if(currentID3 == "item3.1" ){
                             setTimeout(function(){
                               $('#excellent_img').css({"visibility" : "visible"});
                               $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                               $('#excellent_img').show(1).delay(800).hide(1);


                               //Level 3 Questioning
                               //##############################################################################
                               $('#body_background').attr("src", "img/bouyancy.png");
                               $('#check_button3').css({"display": "none"});
                               $('#check_button4').css({"display": "block"});
                               $('#box3').css({"display": "none"});
                               $('#box4').css({"display": "block"});

                               $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item
                               $('#box4').droppable({
                                 drop: function(event, ui){
                                   $(this).css("border", "3px dashed gray");
                                   $("#check_button4").click(function(){
                                     var draggable4 = ui.draggable;
                                     var currentID4 = ui.draggable.attr('id');   //Here we are looking for the id of the dragged and dropped item
                                     $(draggable4).appendTo("#dragItems2");

                                      if(currentID4 == "item7.1" ){
                                        setTimeout(function(){
                                          $('#excellent_img').css({"visibility" : "visible"});
                                          $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                                          $('#excellent_img').show(1).delay(800).hide(1);
                                        }, 2000);
                                      } else {
                                        $(".item").draggable({cursor: "pointer"});
                                        $('#excellent_img').css({"visibility" : "visible"});
                                        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
                                        $('#excellent_img').show(1).delay(800).hide(1);
                                      }

                                   });
                                 }
                               });

                             }, 2000);
                           } else {
                             $(".item").draggable({cursor: "pointer"});
                             $('#excellent_img').css({"visibility" : "visible"});
                             $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
                             $('#excellent_img').show(1).delay(800).hide(1);
                           }
                         });

                     }
                   });
                 }, 2000);
               } else {
                 $(".item").draggable({cursor: "pointer"});
                 $('#excellent_img').css({"visibility" : "visible"});
                 $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
                 $('#excellent_img').show(1).delay(800).hide(1);
               }
             });

            }
          });


        }, 2000);

      } else {
        //alert("Oops!! Try again seebo");
        $(".item").draggable({cursor: "pointer"});
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      }
      //console.log(currentID);
    })
  }
});
