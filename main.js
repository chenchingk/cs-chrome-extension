let videoPlayer = document.querySelectorAll('#player')[1];

let onButton = document.createElement('div');
onButton.className = 'button';
onButton.style.backgroundColor = 'gray';
onButton.style.width = '100%';
onButton.style.height = '30px';
onButton.innerHTML = '<center>Activate Note Mode</center>';

videoPlayer.after(onButton);

function zenMode() {
  //remove everything from page
  document.querySelector('#columns').remove();

  //create new player div and put after the header div
  let playerDiv = document.createElement('div');
  playerDiv.setAttribute('id', 'player2');
  playerDiv.style.width = '700px';
  playerDiv.style.height = '400px';
  document.querySelector('#container').after(playerDiv);

  //youtube api script below
  var tag = document.createElement('script');

  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player2', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }

  console.log(player);

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }
}

onButton.addEventListener('click', zenMode);
