$(document).ready(() =>{
    let prevScrollpos = $(window).scrollTop();
    $(window).scroll(function() {
      let currentScrollPos = $(this).scrollTop();
      if (prevScrollpos > currentScrollPos) {
        $(".navbar").css("top", "0");
      } else {
        $(".navbar").css("top", "-100px"); // Change the value to hide the navbar completely
      }
      prevScrollpos = currentScrollPos;
    });
    // imgbox = $(".imgbox")
    
    // imgbox.on({
    //     mouseover: ()=>
    //     {
    //         imgbox.css({
    //             "box-shadow": "rgba(185, 38, 38, 0.774) 0px 30px 150px"
    //         });
    //     },
    //     mouseout: ()=>{
    //         imgbox.css({
    //             "box-shadow": " rgba(78, 0, 0, 0.4) 0px 30px 90px"
    //         });
    //     }
    // });
  $('.jobs_Panel .jobbox').hide();
  $('.jobs_Panel .jobbox').eq(0).show();
// When a button is clicked, toggle the visibility of its corresponding job box
$('.pbuttons').click(function() {
  var index = $('.pbuttons').index(this);
  $('.jobs_Panel .jobbox').hide();
  // $('.jobs_Panel .jobbox').eq(index).css('opacity', 0)
  //                                   .slideDown('slow')
  //                                   .animate(
  //                                       { opacity: 1 },
  //                                       { queue: false, duration: 'slow' }
  //                                     );
  $('.jobs_Panel .jobbox').eq(index).fadeIn(300)
})

})