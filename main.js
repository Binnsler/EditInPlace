$(document).on('ready', function(){

	// On click, hide the element and create input
	$('.profile-name').on('click', function(){
		$('.profile-name').hide();
		$('.text-div').prepend('<input type="text" class="name-input" value="Enter Name">');
		$('.name-input').focus();
	});

	$('.profile-bio').on('click', function(){
		$('.profile-bio').hide();
		$('.text-div').append('<input type="text" class="bio-input" value="You have 160 characters for your life story.">');
		$('.bio-input').focus();
	});
	


	// Trigger blur switch
	$('body').on('blur', '.name-input', function(){
		var $nameInput = $('.name-input').val();
		$('.profile-name').text($nameInput);
		$('.name-input').hide();
		$('.profile-name').show();
	});	

	$('body').on('blur', '.bio-input', function(){
		var $bioInput = $('.bio-input').val();
		$('.profile-bio').text($bioInput);
		$('.bio-input').hide();
		$('.profile-bio').show();
	});	
	


});






