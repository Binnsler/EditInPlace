$(document).on('ready', function(){

	// On click, hide the element and create input (for Name)
	$('.profile-name').on('click', function(){
		$('.profile-name').hide();
		$('.profile-name').after('<input type="text" class="name-input" value="Enter Name">');
		$('.name-input').focus();
	});

	// Trigger blur switch (for Name)
	$('body').on('blur', '.name-input', function(){
		var $nameInput = $('.name-input').val();
		$('.profile-name').text($nameInput);
		$('.name-input').hide();
		$('.profile-name').show();
	});	

	// Same for the Bio
	$('.profile-bio').on('click', function(){
		$('.profile-bio').hide();
		$('.profile-bio').after('<input type="text" class="bio-input" value="You have 160 characters for your life story.">');
		$('.bio-input').focus();
	});

	$('body').on('blur', '.bio-input', function(){
		var $bioInput = $('.bio-input').val();
		$('.profile-bio').text($bioInput);
		$('.bio-input').hide();
		$('.profile-bio').show();
	});	
});	
	


// Editable Function

// $(document).on('ready', function(){

// 	$('.editable').on('click', function(){
// 		var $edit = $(this);
// 		$edit.hide();
// 		$edit().after('<input class="editable-input" type="text" value="Write here">');
// 		$('.editable-input').focus();

// 		$('body').on('blur', '.editable-input', function(){
// 			$('.editable-input').val() === '';
// 			var $editInput = $('.editable-input').val();
// 			$edit.text($editInput);
// 			$('.editable-input').hide();
// 			$edit.show();
// 		});
// 	});
// });




