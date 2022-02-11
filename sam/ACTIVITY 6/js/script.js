$(function(){  // When the document is ready
  $("#mass").click(function(){
  $("#mass").effect( "pulsate", {times:3}, 3000 );
  //$("#temperature").effect( "pulsate", {times:5}, 3000 );
      $("#temperature").click(function(){
        $("#temperature").effect( "pulsate", {times:3}, 3000 );
            $("#check_btn").click(function(){   //When we click the check_btn to verify the answer
            $('#excellent_img').css({"visibility" : "visible"});
            $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
            $('#excellent_img').show(1).delay(800).hide(1);
        })
      })
  });

  $("#temperature").click(function(){
  $("#temperature").effect( "pulsate", {times:3}, 3000 );
  //$("#temperature").effect( "pulsate", {times:5}, 3000 );
      $("#mass").click(function(){
        $("#mass").effect( "pulsate", {times:3}, 3000 );
            $("#check_btn").click(function(){   //When we click the check_btn to verify the answer
            $('#excellent_img').css({"visibility" : "visible"});
            $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");;
            $('#excellent_img').show(1).delay(800).hide(1);
        })
      })
  });
//##############################################################333
  //Checking for wrong sequences!!!

  $("#surface_area").click(function(){
      $("#surface_area").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })


  $("#volume").click(function(){
      $("#volume").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })


  $("#height").click(function(){
      $("#height").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })

  $("#diameter").click(function(){
      $("#diameter").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })


  $("#acceleration").click(function(){
      $("#acceleration").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })

  $("#area").click(function(){
      $("#area").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })


  $("#radius").click(function(){
      $("#radius").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })

  $("#mass").click(function(){
      $("#mass").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })

  $("#temperature").click(function(){
      $("#temperature").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })

  $("#voltage").click(function(){
      $("#voltage").effect( "pulsate", {times:3}, 3000 );
      $("#check_btn").click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      })
  })
});
