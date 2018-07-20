!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

function formatStr(str) {
	if (typeof(str)=='number'){
		str = String(str);
	}
	str = str.replace(/(\.(.*))/g, '');
	var arr = str.split('');
	var str_temp = '';
	if (str.length > 3) {
		for (var i = arr.length - 1, j = 1; i >= 0; i--, j++) {
			str_temp = arr[i] + str_temp;
			if (j % 3 == 0) {
				str_temp = ' ' + str_temp;
			}
		}
		return str_temp;
	} else {
		return str;
	}
}


$(function() {
	var exportPrice = $('#export-price-parse').text();

	$('#mortgage-tittle-parsed').text(exportPrice);

	$('#installment-tittle-parsed').text(exportPrice);

});

$(function() {

	var titleCredit = $('#installment-tittle-parsed').text();

	titleCredit = titleCredit.replace(new RegExp(" ",'g'),"");

	var paymentCreditMin = $('#installment-range-payment').attr("min");
	paymentCreditMin = titleCredit/100*30;
	$('#installment-range-payment').attr("min", paymentCreditMin);
	$('#installment-number-payment').attr("min", paymentCreditMin);

	$('#installment-range-payment').attr("value", paymentCreditMin);
	$('#installment-number-payment').attr("value", paymentCreditMin);

	$('#installment-range-payment').attr("max", titleCredit);
	$('#installment-number-payment').attr("max", titleCredit);
});


$(".сalculate-installment").on("click", function() {

	var paymentMin = $('#installment-number-payment').attr("min");
	var paymentMax = $('#installment-number-payment').attr("max");
	var payment = $('#installment-number-payment').val();

	if ($('#installment-number-term').val() > 0 && $('#installment-number-term').val() < 13 && Math.round(payment) >= Math.round(paymentMin) && Math.round(payment) <= Math.round(paymentMax)) {


		var titleCredit = $('#installment-tittle-parsed').text();

		titleCredit = titleCredit.replace(new RegExp(" ",'g'),"");

		var paymentCredit = $('#installment-number-payment').val();

		var termCredit = $('#installment-number-term').val();

		var betCredit = $('#installment-number-credit').val();

		totalCredit = parseInt(titleCredit) - parseInt(paymentCredit);

		annual = totalCredit/100*1;

		var upSumm = annual*termCredit;

		monthlyPayment =  (totalCredit+upSumm)/termCredit;

		totalCredit = formatStr(totalCredit);


		$('#installment-summ-parsed').text(totalCredit);

		$('#installment-results-summ').text(totalCredit);


		monthlyPayment = Math.round(monthlyPayment);

		monthlyPayment = formatStr(monthlyPayment);

		$("#installment-results-payment").text(monthlyPayment);
		$("#installment-results-payment-hid").val(monthlyPayment);

		upSumm = formatStr(upSumm);

		$("#installment-overpayments").text(upSumm);
		$("#installment-overpayments-hid").val(upSumm);

		destination23 = $('.results-main-installment input:last').offset().top;
		$('.calc-modal-installment-overlay').animate( { scrollTop: destination23}, 1100);

	} else {
		event.preventDefault();
		$('#installment-summ-parsed').text('некорректное число');
		$('#installment-results-payment').text('некорректное число');
		$('#installment-overpayments').text('некорректное число');
		$('#installment-summ-parsed').css('color', 'red');
		$('#installment-results-payment').css('color', 'red');
		$('#installment-overpayments').css('color', 'red');
	}


});






$(function() {

	var titleCredit = $('#installment-static-range-cost').val();

	var paymentCreditMin = $('#installment-static-range-payment').attr("min");

	paymentCreditMin = parseInt(titleCredit)/100*30;

	$('#installment-static-range-payment').attr("min", paymentCreditMin);
	$('#installment-static-number-payment').attr("min", paymentCreditMin);

	$('#installment-static-range-payment').attr("value", paymentCreditMin);
	$('#installment-static-number-payment').attr("value", paymentCreditMin);

	$('#installment-static-range-payment').attr("max", titleCredit);
	$('#installment-static-number-payment').attr("max", titleCredit);

});

$(function() {



	$('#installment-static-range-cost,#installment-static-number-cost').on('input', function (){

		var titleCredit = $('#installment-static-range-cost').val();

		var paymentCreditMin = $('#installment-static-range-payment').attr("min");

		paymentCreditMin = parseInt(titleCredit)/100*30;

		$('#installment-static-range-payment').attr("min", paymentCreditMin);
		$('#installment-static-number-payment').attr("min", paymentCreditMin);

		$('#installment-static-range-payment').attr("value", paymentCreditMin);
		$('#installment-static-number-payment').attr("value", paymentCreditMin);

		$('#installment-static-range-payment').attr("max", titleCredit);
		$('#installment-static-number-payment').attr("max", titleCredit);

	});

});


$(".сalculate-installment-static").on("click", function(event) {

	var paymentMin = $('#installment-static-number-payment').attr("min");
	var paymentMax = $('#installment-static-number-payment').attr("max");
	var payment = $('#installment-static-number-payment').val();

	if ($('#installment-static-number-cost').val() > 1299999 && $('#installment-static-number-cost').val() < 4000001 && $('#installment-static-number-term').val() > 0 && $('#installment-static-number-term').val() < 13 && Math.round(payment) <= Math.round(paymentMax) && Math.round(payment) >= Math.round(paymentMin)) {

		var titleCredit = $('#installment-static-number-cost').val();

		var paymentCredit = $('#installment-static-number-payment').val();

		var termCredit = $('#installment-static-number-term').val();

		totalCredit = parseInt(titleCredit) - parseInt(paymentCredit);

		annual = totalCredit/100*1;

		var upSumm = annual*termCredit;

		monthlyPayment =  (totalCredit+upSumm)/termCredit;

		totalCredit = formatStr(totalCredit);


		$('#installment-static-summ-parsed').text(totalCredit);

		$('#installment-static-results-summ').text(totalCredit);


		monthlyPayment = Math.round(monthlyPayment);

		monthlyPayment = formatStr(monthlyPayment);

		$("#installment-static-results-payment").text(monthlyPayment);
		$("#installment-static-results-payment-hid").val(monthlyPayment);

		upSumm = formatStr(upSumm);

		$("#installment-static-overpayments").text(upSumm);
		$("#installment-static-overpayments-hid").val(upSumm);

		destination = $('.total-credit').offset().top;
		$('html,body').animate( { scrollTop: destination}, 1100);

	} else {
		event.preventDefault();
		$('#installment-static-summ-parsed').text('некорректное число');
		$('#installment-static-results-payment').text('некорректное число');
		$('#installment-static-overpayments').text('некорректное число');
		$('#installment-static-summ-parsed').css('color', 'red');
		$('#installment-static-results-payment').css('color', 'red');
		$('#installment-static-overpayments').css('color', 'red');
	}


});


$(function() {

	var titleCredit = $('#mortgage-tittle-parsed').text();

	titleCredit = titleCredit.replace(new RegExp(" ",'g'),"");

	$('#mortgage-range-payment').attr("max", titleCredit);
	$('#mortgage-number-payment').attr("max", titleCredit);

});


$(".сalculate-mortgage").on("click", function() {

	var paymentMin = $('#mortgage-number-payment').attr("min");
	var paymentMax = $('#mortgage-number-payment').attr("max");
	var payment = $('#mortgage-number-payment').val();

	if ($('#mortgage-number-term').val() > 0 && $('#mortgage-number-term').val() < 31 && $('#mortgage-number-credit').val() >7.9 && $('#mortgage-number-credit').val() <16.1 && Math.round(payment) <= Math.round(paymentMax) && Math.round(payment) >= Math.round(paymentMin)) {

		var titleCredit = $('#mortgage-tittle-parsed').text();

		titleCredit = titleCredit.replace(new RegExp(" ",'g'),"");

		var paymentCredit = $('#mortgage-number-payment').val();

		var termCredit = $('#mortgage-number-term').val();

		var betCredit = $('#mortgage-number-credit').val();

		totalCredit = parseInt(titleCredit) - parseInt(paymentCredit);

		n = termCredit*12;
		i =  (betCredit/12/100);
		a = Math.pow(1+i, n);
		monthlyPayment = ((totalCredit*a)*i)/(a-1);

		upSumm = (monthlyPayment*12*termCredit)-totalCredit;

		totalCredit = formatStr(totalCredit);

		$('#mortgage-results-credit').text(betCredit);
		$('#mortgage-results-credit-hid').val(betCredit);

		$('#mortgage-summ-parsed').text(totalCredit);

		$('#mortgage-results-summ').text(totalCredit);
		$('#mortgage-results-summ-hid').val(totalCredit);

		$('#mortgage-results-term').text(termCredit);
		$('#mortgage-results-term-hid').val(termCredit);

		monthlyPayment = Math.round(monthlyPayment);

		monthlyPayment = formatStr(monthlyPayment);

		$("#mortgage-results-payment").text(monthlyPayment);
		$("#mortgage-results-payment-hid").val(monthlyPayment);

		upSumm = formatStr(upSumm);

		$("#mortgage-overpayments").text(upSumm);
		$("#mortgage-overpayments-hid").val(upSumm);

		destination = $('.total-credit').offset().top;
		$('.calc-modal-mortrgage-overlay').animate( { scrollTop: destination}, 1100);

	} else {
		event.preventDefault();
		$('#mortgage-summ-parsed').text('некорректное число');
		$('#mortgage-results-payment').text('некорректное число');
		$('#mortgage-overpayments').text('некорректное число');
		$('#mortgage-results-summ').text('некорректное число');
		$('#mortgage-results-term').text('некорректное число');
		$('#mortgage-results-credit').text('некорректное число');
		$('#mortgage-summ-parsed').css('color', 'red');
		$('#mortgage-results-payment').css('color', 'red');
		$('#mortgage-overpayments').css('color', 'red');
		$('#mortgage-results-summ').css('color', 'red');
		$('#mortgage-results-term').css('color', 'red');
		$('#mortgage-results-credit').css('color', 'red');
	}


});


$(function() {

	var titleCredit = $('#mortgage-static-range-cost').val();

});

$(function() {

	$('#mortgage-static-range-cost,#mortgage-static-number-cost').on('input', function (event){

		var titleCredit = $('#mortgage-static-range-cost').val();
	});

});



$(".сalculate-mortgage-static").on("click", function() {

	var paymentMin = $('#mortgage-static-number-payment').attr("min");
	var paymentMax = $('#mortgage-static-number-payment').attr("max");
	var payment = $('#mortgage-static-number-payment').val();

	if ($('#mortgage-static-number-cost').val() > 1299999 && $('#mortgage-static-number-cost').val() < 4000001 && $('#mortgage-static-number-term').val() > 0 && $('#mortgage-static-number-term').val() < 31 && $('#mortgage-static-number-credit').val() > 7.9 && $('#mortgage-static-number-credit').val() < 16.1 && Math.round(payment) <= Math.round(paymentMax) && Math.round(payment) >= Math.round(paymentMin)) {


		var titleCredit = $('#mortgage-static-number-cost').val();

		var paymentCredit = $('#mortgage-static-number-payment').val();

		var termCredit = $('#mortgage-static-number-term').val();

		var betCredit = $('#mortgage-static-number-credit').val();

		totalCredit = titleCredit - paymentCredit;

		n = termCredit*12;
		i =  (betCredit/12/100);
		a = Math.pow(1+i, n);
		monthlyPayment = ((totalCredit*a)*i)/(a-1);

		upSumm = (monthlyPayment*12*termCredit)-totalCredit;

		totalCredit = formatStr(totalCredit);

		$('#mortgage-static-results-credit').text(betCredit);
		$('#mortgage-static-results-credit-hid').val(betCredit);

		$('#mortgage-static-summ-parsed').text(totalCredit);

		$('#mortgage-static-results-summ').text(totalCredit);
		$('#mortgage-static-results-summ-hid').val(totalCredit);

		$('#mortgage-static-results-term').text(termCredit);
		$('#mortgage-static-results-term-hid').val(termCredit);

		monthlyPayment = Math.round(monthlyPayment);

		monthlyPayment = formatStr(monthlyPayment);

		$("#mortgage-static-results-payment").text(monthlyPayment);
		$("#mortgage-static-results-payment-hid").val(monthlyPayment);

		upSumm = formatStr(upSumm);

		$("#mortgage-static-overpayments").text(upSumm);
		$("#mortgage-static-overpayments-hid").val(upSumm);

		destination = $('.total-credit').offset().top;
		$('html,body').animate({scrollTop: destination}, 1100);

	} else {
		event.preventDefault();
		$('#mortgage-static-summ-parsed').text('некорректное число');
		$('#mortgage-static-results-payment').text('некорректное число');
		$('#mortgage-static-overpayments').text('некорректное число');
		$('#mortgage-static-results-summ').text('некорректное число');
		$('#mortgage-static-results-term').text('некорректное число');
		$('#mortgage-static-results-credit').text('некорректное число');
		$('#mortgage-static-summ-parsed').css('color', 'red');
		$('#mortgage-static-results-payment').css('color', 'red');
		$('#mortgage-static-overpayments').css('color', 'red');
		$('#mortgage-static-results-summ').css('color', 'red');
		$('#mortgage-static-results-term').css('color', 'red');
		$('#mortgage-static-results-credit').css('color', 'red');
	}



});


$('a[href="#calc-modal-mortrgage-open"]').on('click', function() {
	$('#calc-modal-mortrgage-open').fadeIn('slow');
	$('#calc-modal-mortrgage-open').css('display', 'flex');
});

$('a[href="#calc-modal-installment-open"]').on('click', function() {
	$('#calc-modal-installment-open').fadeIn('slow');
	$('#calc-modal-installment-open').css('display', 'flex');
});


$('#end-modal-mortgage').on('click', function() {
	$('#calc-modal-mortrgage-open').fadeOut('slow');
});

$('#end-modal-installment').on('click', function() {
	$('#calc-modal-installment-open').fadeOut('slow');
});

$('.overlay-color').on('click', function() {
	$('#calc-modal-mortrgage-open').fadeOut('slow');
});

$('.overlay-color').on('click', function() {
	$('#calc-modal-installment-open').fadeOut('slow');
});


$(function() {

	$('input[type="tel"]').mask("+7 (999) 999-99-99");

});
