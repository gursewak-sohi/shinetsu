//Initiate WOW
new WOW().init();

// Change Language
$('[lang="en"]').hide();
$('#switch-lang').click(function() {
    $('[lang="en"]').toggle();
    $('[lang="jp"]').toggle();
});