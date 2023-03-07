import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new Vimeo(iframe);

player.on('play', throttle(ubdateTimeVideo, 1000));
     
function ubdateTimeVideo(event) {
  localStorage.setItem("videoplayer-current-time", event.seconds)
}

const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime)









