
(function($){
   var  viewUl = $("div.view")
               .css("overflow", "hidden") // -- изменили установленные css-правила (при отсутствии JS)
               .children("ul"), 
        imgs = viewUl.find("img"),  // - collection Images 
        imgWidth = 400,  //--or  images.width  $("img").first("width")
        imgsLength = imgs.length, // images length
        totalImgsWidth = imgsLength * imgWidth,  // total width of images
        current = 1; // ----current picture  

  $("div.show")
  .show() // -- изменили установленные css-правила (при отсутствии JS)
  .find("button").on("click", function(){
    var direction = $(this).attr("class"),
        position = imgWidth; 
    (direction == "next") ? ++current : --current;
     if(current == 0){
      current = imgsLength; // set Last image
      direction = "next";
      position = totalImgsWidth - imgWidth;
     }else if(current-1 == imgsLength){
      current = 1; // set first image
      position = 0;
     }

   doIt(viewUl, position, direction);
  });

  function doIt(container, position, direction){
    var sign; // "-=" or "+="
    if(direction && position !=0) {
      sign = (direction == "next") ? "-=" : "+=";
    }
      var shift = {"margin-left": sign ? (sign+position) : position};
      var duration = {};
      if(position ==0 || position == imgWidth*(imgsLength-1))
        duration = {duration:0};
      container.animate(shift, duration);
    }

})(jQuery);