  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() { // 바꾸면 안되는 함수이름
    // player라는 id 값을 갖고있는 요소를 찾고, 옵션에 따라 재생
    new YT.Player('player', {
      videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID(주소창에 있는)
      playerVars : {
        autoplay: true, // 자동 재생 유무
        loop: true, // 반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 id 목록
      },
      events: {
        onReady: function (event) {
          event.target.mute() // 음소거
        }
      }
    });
  }

  // // 4. The API will call this function when the video player is ready.
  // function onPlayerReady(event) {
  //   event.target.playVideo();
  // }

  // // 5. The API calls this function when the player's state changes.
  // //    The function indicates that when playing a video (state=1),
  // //    the player should play for six seconds and then stop.
  // var done = false;
  // function onPlayerStateChange(event) {
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // }
  // function stopVideo() {
  //   player.stopVideo();
  // }