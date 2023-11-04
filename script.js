$(document).ready(function() {
    var video = $('#video')[0]; // Get the native DOM element

    $('#play-pause').on('click', function() {
        if (video.paused) {
            video.play();
            $(this).text('Pause');
        } else {
            video.pause();
            $(this).text('Play');
        }
    });

    // Add event listeners for other video events as needed
});

// Optional: Keep the video playing when the tab is out of focus
$(window).on('blur', function() {
    $('#video')[0].play();
});
