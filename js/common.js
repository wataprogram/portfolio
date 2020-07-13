$(function(){
  $('.toggle_btn').click(function(){
    $('.sp_menu').removeClass('nav_close')
    $('.sp_menu').addClass('nav_open')
  })

  $('.close_btn').click(function(){
    $('.sp_menu').removeClass('nav_open')
    $('.sp_menu').addClass('nav_close')
  })
});



