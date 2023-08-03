    import Player from '@vimeo/player';
    import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    const LS_KEY= "videoplayer-current-time";


    player.on('timeupdate', throttle(onPlayPlayer, 1000));

    function onPlayPlayer(data) {
        let seconds = data.seconds;
        localStorage.setItem(LS_KEY, seconds);
    }

    player.setCurrentTime(localStorage.getItem(LS_KEY) || 0);
