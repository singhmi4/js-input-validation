$( document ).ready(() => {
    console.log('ready');
	
	let usernameAccept = false;
	let passwordAccept = false;
	let emailAccept = false;
	const successMsg = 'Looks good!';
	
	$( '#username' ).on('blur', function() {
		console.log($(this).val());
		const usernameRegex = /^[a-zA-Z]+$/;
		usernameAccept = usernameRegex.test($(this).val())
		console.log(usernameAccept);
		// Input Validation
		$( '#usernameHelp' ).removeClass('text-muted');
		if (usernameAccept) {
			$(this).css('borderColor', '#28a745');
			$( '#usernameHelp' ).css('color', '#28a745');
			$( '#usernameHelp' ).text(successMsg);
		} else {
			$(this).css('borderColor', '#dc3545');
			$( '#usernameHelp' ).css('color', '#dc3545');
			$( '#usernameHelp' ).text('Must contain only alphabet letters.');
		}
	});
	
	$( '#password' ).on('blur', function() {
		let capLetterToken = 5;
		let symbolToken = 6;
		let hyphenToken = 2;
		
		const capLetterRegex = /[A-Z]/;
		const symbolRegex = /[^a-zA-Z\d\s:-]/; //doesn't match space, hyphe, and colon
		const hyphenRegex = /-/;
		
		console.log($(this).val());
		
		// password must be equal to 13 
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
		
		// Input Validation
		$( '#passwordHelp' ).removeClass('text-muted');
		if (passwordAccept) {
			$(this).css('borderColor', '#28a745');
			$( '#passwordHelp' ).css('color', '#28a745');
			$( '#passwordHelp' ).text(successMsg);
		} else {
			$(this).css('borderColor', '#dc3545');
			$( '#passwordHelp' ).css('color', '#dc3545');
			$( '#passwordHelp' ).text('Must contain 5 capital letters, 6 symbols, and 2 hyphens.');
		}
		
	});
	
	$( '#email' ).on('blur', function() {
		const emailRegex = /^[a-z0-9_]*@gmail.com$/;
		emailAccept = emailRegex.test($(this).val());
		console.log($(this).val());
		console.log(emailAccept);
		
		// Input Validation
		$( '#emailHelp' ).removeClass('text-muted');
		if (emailAccept) {
			$(this).css('borderColor', '#28a745');
			$( '#emailHelp' ).css('color', '#28a745');
			$( '#emailHelp' ).text(successMsg);
		} else {
			$(this).css('borderColor', '#dc3545');
			$( '#emailHelp' ).css('color', '#dc3545');
			$( '#emailHelp' ).text('Gmail addresses only.');
		}
		
	});

    $( 'form' ).on('submit', function() {
        if (usernameAccept && passwordAccept && emailAccept) {
			console.log('Signup Successful!');
			$( '.username' ).text($( '#username' ).val());
			console.log($( '#username' ).val());
			$( '#modalSignupSuccessful' ).modal('toggle');
			usernameAccept = false;
			passwordAccept = false;
			emailAccept = false;
			$( '#submitHelp' ).css('display', 'none');
			$('form').trigger("reset");
		} else {
			if (!usernameAccept) {
				$( '#username' ).css('borderColor', '#dc3545');
				$( '#usernameHelp' ).removeClass('text-muted');
				$( '#usernameHelp' ).css('color', '#dc3545');
			}
			
			if (!passwordAccept) {
				$( '#password' ).css('borderColor', '#dc3545');
				$( '#passwordHelp' ).removeClass('text-muted');
				$( '#passwordHelp' ).css('color', '#dc3545');
			}
			
			if (!emailAccept) {
				$( '#email' ).css('borderColor', '#dc3545');
				$( '#emailHelp' ).removeClass('text-muted');
				$( '#emailHelp' ).css('color', '#dc3545');
			}
			
			$( '#submitHelp' ).css('display', 'block');
			console.log('Signup Failed...')
		}
		
		return false; // this causes the page to not reload
    });
});