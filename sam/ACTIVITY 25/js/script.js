$(function(){          //When the document is ready
//  alert("Hooray doc is ready!!!");
  $('.item').draggable({
      cursor: "move",
  });



  $("#left_options").droppable({
    drop: function(event, ui){
      $(this).css("border", "3px dashed black");
      $('#check_button').click(function(){
        var draggable1 = ui.draggable;
        var currentID = ui.draggable.attr('id');
        //We shall need to append this draggable element to empty the div for next use.
        setTimeout(function(){
          $(draggable1).appendTo("#dragItems2");
        }, 2000);
        //$(draggable1).css("visibility", "hidden");
        if(currentID == "item1.1"){
          $(".item").draggable({cursor: "pointer"});
          setTimeout(function(){
            $('#excellent_img').css({"visibility" : "visible"});
            $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
            $('#excellent_img').show(1).delay(1000).hide(1);

            // #####################Question 2############################################3
            $("#item1.2").css({"display" : "block"});
            $("#check_button").css({"display": "none"});
            $("#check_button2").css({"display": "block"});
            $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item

            $("#left_options").droppable({
              drop: function(event, ui){
                $(this).css("border", "3px dashed gray");
                $("#check_button2").click(function(){
                  var draggable2 = ui.draggable;
                  var currentID2 = ui.draggable.attr('id');
                  //We shall need to append this draggable element to empty the div for next use.
                  setTimeout(function(){
                    $(draggable2).appendTo("#dragItems2");
                  }, 2000);
                  if(currentID2 == "item1.2"){
                    $(".item").draggable({cursor: "pointer"});
                    $('#excellent_img').css({"visibility" : "visible"});
                    $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                    $('#excellent_img').show(1).delay(1000).hide(1);

                    // #####################Question 3############################################3
                    $("#item1.3").css({"display" : "block"});
                    $("#check_button2").css({"display": "none"});
                    $("#check_button3").css({"display": "block"});
                    $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item

                    $("#left_options").droppable({
                      drop: function(event, ui){
                        $(this).css("border", "3px dashed black");
                        $("#check_button3").click(function(){
                          var draggable3 = ui.draggable;
                          var currentID3 = ui.draggable.attr('id');
                          //We shall need to append this draggable element to empty the div for next use.
                          setTimeout(function(){
                            $(draggable3).appendTo("#dragItems2");
                          }, 2000);
                          if(currentID3 == "item1.3"){
                            $(".item").draggable({cursor: "pointer"});
                            setTimeout(function(){
                              $('#excellent_img').css({"visibility" : "visible"});
                              $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
                              $('#excellent_img').show(1).delay(1000).hide(1);

                              //##############################Question 4 ###################################################3
                              $("#item1.4").css({"display" : "block"});
                              $("#check_button3").css({"display": "none"});
                              $("#check_button4").css({"display": "block"});
                              $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item

                              $("#left_options").droppable({
                                drop: function(event, ui){
                                  $(this).css("border", "3px dashed gray");
                                  $("#check_button4").click(function(){
                                    var draggable4 = ui.draggable;
                                    var currentID4 = ui.draggable.attr('id');
                                    //We shall need to append this draggable element to empty the div for next use.
                                    setTimeout(function(){
                                      $(draggable4).appendTo("#dragItems2");
                                    }, 2000);
                                    if(currentID4 == "item1.4"){
                                      $(".item").draggable({cursor: "pointer"});
                                      setTimeout(function(){
                                        $('#excellent_img').css({"visibility" : "visible"});
                                        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                                        $('#excellent_img').show(1).delay(1000).hide(1);
                                      }, 800)
                                    }
                                  });
                                }
                              })
                            }, 800)
                          } else {
                            $(".item").draggable({cursor: "pointer"});
                            $('#excellent_img').css({"visibility" : "visible"});
                            $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                            $('#excellent_img').show(1).delay(1000).hide(1);
                          }
                        })
                      }
                    });

                  }
                })
              }
            });
          }, 800)
        } else{
          $(".item").draggable({cursor: "pointer"});
          $('#excellent_img').css({"visibility" : "visible"});
          $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
          $('#excellent_img').show(1).delay(1000).hide(1);
        }
      })
    }
  });

  ///############################################################################################
// THIS IS THE CODE FOR THE RIGHT DROP ZONE
  ///############################################################################################


  $("#right_options").droppable({
    drop: function(event, ui){
      $(this).css("border", "3px dashed black");
      $('#check_button').click(function(){
        var draggable1_left = ui.draggable;
        var currentID_left = ui.draggable.attr('id');
        //We shall need to append this draggable element to empty the div for next use.
        setTimeout(function(){
          $(draggable1_left).appendTo("#dragItems2");
        }, 2000);
        //$(draggable1).css("visibility", "hidden");
        if(currentID_left == "item1.1"){
          $(".item").draggable({cursor: "pointer"});
          setTimeout(function(){
            $('#excellent_img2').css({"visibility" : "visible"});
            $('#excellent_img2').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
            $('#excellent_img2').show(1).delay(1000).hide(1);

            // #####################Question 2############################################3
            $("#item1.2").css({"display" : "block"});
            $("#check_button").css({"display": "none"});
            $("#check_button2").css({"display": "block"});
            $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item

            $("#right_options").droppable({
              drop: function(event, ui){
                $(this).css("border", "3px dashed gray");
                $("#check_button2").click(function(){
                  var draggable2_left = ui.draggable;
                  var currentID2_left = ui.draggable.attr('id');
                  //We shall need to append this draggable element to empty the div for next use.
                  setTimeout(function(){
                    $(draggable2_left).appendTo("#dragItems2");
                  }, 2000);
                  if(currentID2_left == "item1.2"){
                    $(".item").draggable({cursor: "pointer"});
                    $('#excellent_img2').css({"visibility" : "visible"});
                    $('#excellent_img2').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
                    $('#excellent_img2').show(1).delay(1000).hide(1);

                    // #####################Question 3############################################3
                    $("#item1.3").css({"display" : "block"});
                    $("#check_button2").css({"display": "none"});
                    $("#check_button3").css({"display": "block"});
                    $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item

                    $("#right_options").droppable({
                      drop: function(event, ui){
                        $(this).css("border", "3px dashed black");
                        $("#check_button3").click(function(){
                          var draggable3_left = ui.draggable;
                          var currentID3_left = ui.draggable.attr('id');
                          //We shall need to append this draggable element to empty the div for next use.
                          setTimeout(function(){
                            $(draggable3_left).appendTo("#dragItems2");
                          }, 2000);
                          if(currentID3_left == "item1.3"){
                            $(".item").draggable({cursor: "pointer"});
                            setTimeout(function(){
                              $('#excellent_img2').css({"visibility" : "visible"});
                              $('#excellent_img2').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                              $('#excellent_img2').show(1).delay(1000).hide(1);

                              //##############################Question 4 ###################################################3
                              $("#item1.4").css({"display" : "block"});
                              $("#check_button3").css({"display": "none"});
                              $("#check_button4").css({"display": "block"});
                              $(".item").draggable({cursor: "pointer"}); //Enable draggable functionality back for the next item

                              $("#right_options").droppable({
                                drop: function(event, ui){
                                  $(this).css("border", "3px dashed gray");
                                  $("#check_button4").click(function(){
                                    var draggable4_left = ui.draggable;
                                    var currentID4_left = ui.draggable.attr('id');
                                    //We shall need to append this draggable element to empty the div for next use.
                                    setTimeout(function(){
                                      $(draggable4_left).appendTo("#dragItems2");
                                    }, 2000);
                                    if(currentID4 == "item1.4"){
                                      $(".item").draggable({cursor: "pointer"});
                                      setTimeout(function(){
                                        $('#excellent_img2').css({"visibility" : "visible"});
                                        $('#excellent_img2').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
                                        $('#excellent_img2').show(1).delay(1000).hide(1);
                                      }, 800)
                                    }else{
                                      $(".item").draggable({cursor: "pointer"});
                                      $('#excellent_img2').css({"visibility" : "visible"});
                                      $('#excellent_img2').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                                      $('#excellent_img2').show(1).delay(1000).hide(1);
                                    }
                                  });
                                }
                              })
                            }, 800)
                          } else {
                            $(".item").draggable({cursor: "pointer"});
                            $('#excellent_img2excellent_img2').css({"visibility" : "visible"});
                            $('#excellent_img2').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
                            $('#excellent_img2').show(1).delay(1000).hide(1);
                          }
                        })
                      }
                    });

                  }else {
                    $(".item").draggable({cursor: "pointer"});
                    $('#excellent_img2').css({"visibility" : "visible"});
                    $('#excellent_img2').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
                    $('#excellent_img2').show(1).delay(1000).hide(1);
                  }
                })
              }
            });
          }, 800)
        } else{
          $(".item").draggable({cursor: "pointer"});
          $('#excellent_img2').css({"visibility" : "visible"});
          $('#excellent_img2').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
          $('#excellent_img2').show(1).delay(1000).hide(1);
        }
      })
    }
  });

});
