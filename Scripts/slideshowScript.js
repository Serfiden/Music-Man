$('.slideshowBullets').click(function(){
	var nextID = $(this).attr('id');
	var childNumber = nextID[nextID.length - 1];
	$('.activeSlide').css({
		opacity: 0,
		'z-index': -1,
		transition: 'all .3s'}).removeClass('activeSlide');
	$('.activeBullet').removeClass('activeBullet');

	$('#slideshow' + childNumber).addClass('activeSlide').css({
		opacity: 1,
		'z-index': 0,
		transition: 'all .3s'});
	$('#bullet' + childNumber).addClass('activeBullet');
});

$('.transitionLeft').click(function(){
	var currentID = $('.activeSlide').attr('id');
	var childNumber = Number(currentID[currentID.length - 1]);
	$('.activeSlide').css({
		opacity: 0,
		'z-index': -1,
		transition: 'all .3s'}).removeClass('activeSlide');
	$('.activeBullet').removeClass('activeBullet');

	if(childNumber >= 2){
		$('#slideshow' + (childNumber - 1)).addClass('activeSlide').css({
		opacity: 1,
		'z-index': 0,
		transition: 'all .3s'});
		$('.slideshowBullets:nth-of-type(' + (childNumber - 1) +')').addClass('activeBullet');
	}

	else {
		$('#slideshow' + $('.homeSlideshow').length).addClass('activeSlide').css({
		opacity: 1,
		'z-index': 0,
		transition: 'all .3s'});
		$('.slideshowBullets:nth-last-of-type(1)').addClass('activeBullet');
	}
})

$('.transitionRight').click(function(){
	var currentID = $('.activeSlide').attr('id');
	var childNumber = Number(currentID[currentID.length - 1]);
	$('.activeSlide').css({
		opacity: 0,
		'z-index': -1,
		transition: 'all .3s'}).removeClass('activeSlide');
	$('.activeBullet').removeClass('activeBullet');

	if(childNumber <  $('.homeSlideshow').length){
		$('#slideshow' + (childNumber + 1)).addClass('activeSlide').css({
		opacity: 1,
		'z-index': 0,
		transition: 'all .3s'});
		$('.slideshowBullets:nth-of-type(' + (childNumber + 1) +')').addClass('activeBullet');
	}

	else {
		$('#slideshow1').addClass('activeSlide').css({
		opacity: 1,
		'z-index': 0,
		transition: 'all .3s'});
		$('#bullet1').addClass('activeBullet');
	}
})


/*setInterval(function(){		
	var currentID = $('.activeSlide').attr('id');
	var childNumber = Number(currentID[currentID.length - 1]);
	$('.activeSlide').css({
		opacity: 0,
		'z-index': -1,
		transition: 'all .3s'}).removeClass('activeSlide');
	$('.activeBullet').removeClass('activeBullet');

	if(childNumber <  $('.homeSlideshow').length){
		$('#slideshow' + (childNumber + 1)).addClass('activeSlide').css({
		opacity: 1,
		'z-index': 0,
		transition: 'all .3s'});
		$('.slideshowBullets:nth-of-type(' + (childNumber + 1) +')').addClass('activeBullet');
	}

	else {
		$('#slideshow1').addClass('activeSlide').css({
		opacity: 1,
		'z-index': 0,
		transition: 'all .3s'});
		$('#bullet1').addClass('activeBullet');
	}}, 2500);
*/

