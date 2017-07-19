// --- по клику применяется метод hide и метод show - меняя   display:none    or    display: block

$(function(){
   function toggle(obj){
   	  obj
   	    .siblings("button")
   	      .removeAttr("disabled")
          .css("color", "black")
        .end()           // для того чтобы вернуться в kонтекст нужного объекта используем ---  end
        .attr("disabled","disabled")
        .css("color", "white");
   }

   $(".fadeout").on("click", function(){
      $(".box").fadeOut();
      toggle($(this));
     // $(".hide").attr("disabled", "disabled");     -------очевидна явная повторяемость кода - поэтому вставим его в  функцию toggle
      //$(".hide").siblings("button").removeAttr("disabled");
   });


   $(".fadein").on("click", function(){
      $(".box").fadeIn();
       toggle($(this));
     // $(".show").attr("disabled", "disabled");  -------очевидна явная повторяемость кода - поэтому вставим его в  функцию toggle
     // $(".show").siblings("button").removeAttr("disabled");
   });

   $(".toggle").on("click", function(){
      $(".box_one").toggle();
     });


//  ---по клику происходит переключение - теперь одна кнопка  - меняется текст внутри кнопки

// --  также я хочу добавить еще несколько переменных с временным параметром

   $.fx.speeds._default = 2000;   // --- мне не нравится дефолтное значение в 400 -  я хочу своё - напр.2000
   $.fx.speeds.verySlow = 3000;   //-- хочу доьавить свойство verySlow со значением  3000
   $.fx.speeds.veryFast = 100;    // --- хочу доьавить свойство veryFast со значением  100

	 $(".toggle_two").on("click", function(){
	   if($(".box_two").is(":visible")){
	   	$(".box_two").slideUp("verySlow");
	   	}else{
	   		$(".box_two").slideDown("veryFast");
	   }
	 });

   //  по клику SlideUp-Delay-SlideDown

   $(".delay").on("click", function(){
     if($(".box_three").is(":visible")){
      $(".box_three").slideUp().delay(1500).slideDown(300);
   }
   });

 
//---   animation - по клику используя кастомную функцию inOut которую мы вставили в библиотеку JQuery

  $.fn.inOut = function(speed, fn){
    return $(this).animate(     // возвращает объект Jquery
     {"opacity": "toggle", "height": "toggle"},
     speed || 2000, function(){
      $.isFunction(fn) && fn.call(this);  //  если будет передана функция то он ее отработает применив метод к переданному параметру
     }                   
    );
  };

	 $(".animate").on("click", function(){
		$("div.container").inOut(500);
   });

   
// --- по клику на одну из четырех кнопок меняется положение контейнера

     $(".back").on("click", function(){
      $(".red_square").animate(
        {"right": "+=25","z-index": "-1"},
        300
        );
      });
   
   $(".forward").on("click", function(){
      $(".red_square").animate(
        {"right": "-=25","z-index": "-1"},
        300
        );
	    });
   
   $(".down").on("click", function(){
      $(".red_square").animate(
        {"top": "+=25","z-index": "-1"},
        300
        );
      });
   
   $(".up").on("click", function(){
      $(".red_square").animate(
        {"top": "-=25","z-index": "-1"},
        300
        );
      });

});