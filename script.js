var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'vScyWHnzo5E', // Replace with the ID of the YouTube video you want to play
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Bind events to your custom controls here, if necessary
}

function onPlayerStateChange(event) {
    // Respond to player state changes (like video ending) here, if necessary
}

// Optional: Control the player with custom buttons
$(document).ready(function() {
    // Play/Pause toggle
    $('#play-pause').on('click', function() {
        var state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            $(this).text('Play');
        } else {
            player.playVideo();
            $(this).text('Pause');
        }
    });

    // Other custom controls (volume, skip, etc.) can be added here
});
