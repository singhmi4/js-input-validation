$( document ).ready(() => {
    console.log('ready');

    $( '#submit' ).on('click', () => {
        console.log($( '#username' ).val());
        console.log($( '#password' ).val());
        console.log($( '#email' ).val());
    });
});