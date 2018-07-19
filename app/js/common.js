$(function () {

  $("#lightgallery").lightGallery({
    thumbnail: true,
    selector: '.gallery__item'
  });

  let hideImages = (() => {
    if ($(window).width() < 576) {
      $('.gallery__item:gt(17)').css('display', 'none');
    };
    $(window).resize(() => {
      if ($(window).width() < 576) {
        $('.gallery__item:gt(17)').css('display', 'none');
      } else if ($(window).width() > 576) {
        $('.gallery__item:gt(17)').css('display', 'inline-block');
      }
    });
  })();

});