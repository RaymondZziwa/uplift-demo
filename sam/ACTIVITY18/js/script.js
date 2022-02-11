$(document).ready(function(){
  $('#true_button').click(function(){
    $('#excellent_img').css({"visibility" : "visible"});
    $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
    $('#excellent_img').show(1).delay(800).hide(1);


//lEVEL 2 TESTING for the Moon
    setTimeout(function(){
      $('#body_background').attr("src", "img/body2.png");
      $('#Btn1').css({"display": "none"});
      $('#Btn2').css({"display": "block"});
      $('#false_button2').click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
        $('#excellent_img').show(1).delay(800).hide(1);

  //LEVEL 3 TESTING for Flames
      setTimeout(function(){
        $('#body_background').attr("src", "img/body3.png");
        $('#Btn2').css({"display": "none"});
        $('#Btn3').css({"display": "block"});
        $('#true_button3').click(function(){
          $('#excellent_img').css({"visibility" : "visible"});
          $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
          $('#excellent_img').show(1).delay(800).hide(1);

    //LEVEL 4 TESTING for Lightning
    setTimeout(function(){
      $('#body_background').attr("src", "img/body4.png");
      $('#Btn3').css({"display": "none"});
      $('#Btn4').css({"display": "block"});
      $('#true_button4').click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
        $('#excellent_img').show(1).delay(800).hide(1);


        //LEVEL 5 TESTING for ionized gas
        $('#body_background').attr("src", "img/body5.png");
        $('#Btn4').css({"display": "none"});
        $('#Btn5').css({"display": "block"});
        $('#true_button5').click(function(){
          $('#excellent_img').css({"visibility" : "visible"});
          $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
          $('#excellent_img').show(1).delay(800).hide(1);


          //LEVEL 6 TESTING for planets
          $('#body_background').attr("src", "img/body6.png");
          $('#Btn5').css({"display": "none"});
          $('#Btn6').css({"display": "block"});
          $('#true_button6').click(function(){
            $('#excellent_img').css({"visibility" : "visible"});
            $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0000_excellent.png");
            $('#excellent_img').show(1).delay(800).hide(1);

          });
          $('#false_button6').click(function(){
            $('#excellent_img').css({"visibility" : "visible"});
            $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
            $('#excellent_img').show(1).delay(800).hide(1);
          });

        });
        $('#false_button5').click(function(){
          $('#excellent_img').css({"visibility" : "visible"});
          $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
          $('#excellent_img').show(1).delay(800).hide(1);
        });
      });
      $('#false_button4').click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      });

    }, 2000);


        });
        $('#false_button3').click(function(){
          $('#excellent_img').css({"visibility" : "visible"});
          $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
          $('#excellent_img').show(1).delay(800).hide(1);
        });

      }, 2000);


      });
      $('#false_button2').click(function(){
        $('#excellent_img').css({"visibility" : "visible"});
        $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
        $('#excellent_img').show(1).delay(800).hide(1);
      });
    },2000);



  });

  $('#false_button').click(function(){
    $('#excellent_img').css({"visibility" : "visible"});
    $('#excellent_img').attr("src", "img/PNGS_0000s_0000s_0002_try-again.png");
    $('#excellent_img').show(1).delay(800).hide(1);
  });
});
