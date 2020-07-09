$( document ).ready(() => {
    console.log('ready');
	
	$( '#username' ).on('blur', function() {
		const usernameRegex = /^[a-zA-Z]+$/;
		const usernameResult = usernameRegex.test($(this).val())
		console.log($(this).val());
		console.log(usernameResult);
	});

    $( '#submit' ).on('click', () => {
        console.log($( '#username' ).val());
        console.log($( '#password' ).val());
        console.log($( '#email' ).val());
    });
});