$(document).ready(function(){
// scrool begin
// $("*[data-selection='none']").on('mousedown',function (e) {  //baxsi special works
//   e.preventDefault();
//   return false;
// });


                // servicesPage animation begin
                if(window.pageYOffset==0){
                  $('.rowAnim1').css({
                    "margin-top": '0',
                    position: 'relative',
                    opacity:"1"
                  });
                }

                // servicesPage animation end
//scrooll begin
window.onscroll=function(){
    
                if(window.pageYOffset>200){
                  $('.rowAnim2').css({
                    "margin-top": '0',
                    position: 'relative',
                    opacity:"1"
                  });
                }

                if(window.pageYOffset>500){
                  $('.FootAnim').css({
                    "margin-top": '0',
                    position: 'relative',
                    opacity:"1"
                  });
                }

      if(window.pageYOffset>50){
      
                $("#scrool").css('display', 'block');
                $("#header").css('margin-top', '0.1em');
                $("#header").css('opacity', '0.85');
                $(".bigLogo").css('margin-top', '-77em');
                $("#navAnim").css('margin-top', '-14.5em');
              }else{
                  $("#scrool").css('display', 'none');
                  $("#header").css('margin-top', '2em');
                  $("#header").css('opacity', '1');
                  $(".bigLogo").css('margin-top', '-7em');
                  $("#navAnim").css('margin-top', '0');
                }
                // navAnim company page navbar begin
                switch (true) {
                        case window.pageYOffset:
                           $(".a1").addClass('aactive');
                            break;
                        case 1:
                            day = "Monday";
                            break;
                        case 2:
                            day = "Tuesday";
                            break;
                        case 3:
                            day = "Wednesday";
                            break;
                        case 4:
                            day = "Thursday";
                            break;
                        case 5:
                            day = "Friday";
                            break;
                        case 6:
                            day = "Saturday";
                   }
                // if(window.pageYOffset<500){
                //   $(".a1").addClass('aactive')
                // }else{
                //   $(".a1").removeClass('aactive')
                //   if(window.pageYOffset<950 && window.pageYOffset>499){
                //     $(".a2").addClass('aactive')
                //   }else{
                //     $(".a2").removeClass('aactive')
                //   }
                // }
                //    if(window.pageYOffset>220){
                //   $(".a1").removeClass('aactive')
                //   $(".a2").addClass('aactive')
                // }
                //      if(window.pageYOffset>330){
                //   $(".a1").removeClass('aactive')
                //   $(".a2").removeClass('aactive')
                //   $(".a3").addClass('aactive')
                // }
                //        if(window.pageYOffset>440){
                //   $(".a1").removeClass('aactive')
                //   $(".a2").removeClass('aactive')
                //   $(".a3").removeClass('aactive')
                //   $(".a4").addClass('aactive')
                // }
                //           if(window.pageYOffset>550){
                //   $(".a1").removeClass('aactive')
                //   $(".a2").removeClass('aactive')
                //   $(".a3").removeClass('aactive')
                //   $(".a4").removeClass('aactive')
                //   $(".a5").addClass('aactive')
                // }
                // navAnim company page navbar end


                if(window.pageYOffset>850){
                  $('.servicesAnim').css('top', '0em');
                }
}
   $("#scrool").click(function(event) {
    console.log(window.pageYOffset);
    var i = window.pageYOffset;
    var phase = false;
    window.onwheel = function () {phase = true;};
    var id = setInterval(function () {
      window.scrollTo(0, i);
      if (i <= 250) {
        i -= 5;
      } else {
        i -= 25;
      }
      if (i <=0 || phase) {
        clearInterval(id);
      }
    },0);
    });
// scroll end
    $("#sectionFirst .owl-carousel").owlCarousel({
    items:1,
    dots: false,
    autoplay:true,
    mouseDrag:false,
    nav:true,
    navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
    ]

  });

  $("#portoMagazine .col-md-6 .owl-carousel").owlCarousel({
  	items:1,
   	dots: true,
   	autoplay:true,
     responsive: {
      0: {
        items:1
      },
      200: {
        items:1
      },
    },

  });

  $("#brendCarousel .owl-carousel").owlCarousel({
  	items:6,
    dots:false,
   	autoplay:true,
    nav:true,
    responsive: {
      0: {
        items:1
      },
      768: {
        items:2
      },
      850: {
        items:6
      }
    },
    navText: [
    "<i class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>"
    ]
  });


  function focus(){
  	$('.form-control').attr('border', '1 px solid green');
  }


// dropdown begin
$(".dropdown").mouseover(function(){
    $(".dropdown-menu").css("display", "block");
});

if ($(".js-toggle-menu").length > 0) {
  $(".js-toggle-menu").click(function () {
    $(".mobile-edit").toggleClass('active');
  });
}
// $(".dropdown").mouseleave(function(){
//     $(".dropdown-menu").css("display", "none");
// });
// // dropdown end
$(".diamond").click(function () {
  var el = $("<div>");
  var img = $("<img>");
  var x = $("<div>");
  var prev = $("<div>");
  var next = $("<div>");
  img.attr("src", $(this).find("img").attr("src"));
  x.addClass("closex");
  x.html("x").css({
    fontSize: '14px',
    right: '30.2em',
    top:'0.5em'
  });;
  x.on("click",function () {
    $(".photo-overlay").remove();
  });
  el.addClass("photo-overlay");
  el.append(img);
  el.append(x);

  $(document.body).append(el);
  return false;
});



});

// document.body.appendChild(el);