$(function () {
  /*
  ** section__gallery
  */
  $("#lightgallery").lightGallery({
    thumbnail: true,
    selector: '.gallery__item',
    download: false
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
  /*
  ** /section__gallery
  */

  /*
  ** section__calculator
  */
  $('.value-change__input_text').on('change', () => {
    let arrayValues = section__calculator.calculatorValues;
    for (let i = 0; i < arrayValues.length; i++) {
      if (arrayValues[i].initialValue > arrayValues[i].maxValue) {
        arrayValues[i].initialValue = arrayValues[i].maxValue;
      }
    }
  });

  let transformCreditAmountTotal = (() => {
    $('.credit-amount__total').text((section__calculator.creditAmount).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    $('.value-change__input').on('change', () => {
      $('.credit-amount__total').text((section__calculator.creditAmount).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    });
  })();
  /*
  ** /section__calculator
  */

});