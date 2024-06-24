document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('video');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const stopButton = document.getElementById('stop');

    playButton.addEventListener('click', function () {
        video.play();
    });

    pauseButton.addEventListener('click', function () {
        video.pause();
    });

    stopButton.addEventListener('click', function () {
        video.pause();
        video.currentTime = 0;
    });
});
