$( document ).ready(() => {
    console.log('ready');
	
	let usernameAccept = false;
	let passwordAccept = false;
	let emailAccept = false;
	
	$( '#username' ).on('blur', function() {
		const usernameRegex = /^[a-zA-Z]+$/;
		usernameAccept = usernameRegex.test($(this).val())
		console.log($(this).val());
		console.log(usernameAccept);
	});
	
	$( '#password' ).on('blur', function() {
		let capLetterToken = 5;
		let symbolToken = 6;
		let hyphenToken = 2;
		
		const capLetterRegex = /[A-Z]/;
		const symbolRegex = /[^a-zA-Z\d\s:-]/; //doesn't match space, hyphe, and colon
		const hyphenRegex = /-/;
		
		console.log($(this).val());
		
		if ($(this).val().length === 13) {
			[...($(this).val())].forEach(function(char) {
				// check if character is capLetter
				if (capLetterRegex.test(char)) {
					console.log(char);
					console.log(capLetterRegex.test(char));
					--capLetterToken;
				}
				// check if character is symbol
				if (symbolRegex.test(char)) {
					console.log(char);
					console.log(symbolRegex.test(char));
					--symbolToken;
				}
				// check if character is hypen
				if (hyphenRegex.test(char)) {
					console.log(char);
					console.log(hyphenRegex.test(char));
					--hyphenToken;
				}			
			});

			console.log(`Cap Letters Required: ${capLetterToken}`);
			console.log(`Symbols Required: ${symbolToken}`);
			console.log(`Hyphens Required: ${hyphenToken}`);

			// check to see if tokens are equal to 0
			if (capLetterToken === 0 && symbolToken === 0 && hyphenToken === 0) {
				passwordAccept = true;
			}

		} else {
			passwordAccept = false;
		}
		
		console.log(passwordAccept);
	});

    $( '#submit' ).on('click', () => {
        console.log($( '#username' ).val());
        console.log($( '#password' ).val());
        console.log($( '#email' ).val());
    });
});