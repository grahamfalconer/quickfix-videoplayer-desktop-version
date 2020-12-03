class VideoPlayer {
  constructor() {
    this.pinkVideo = document.getElementById('vid-one');
    this.greenVideo = document.getElementById('vid-two');
    this.volumeSlider = document.getElementById('volume-slider');
    this.playButton = document.getElementById('play-button')
    this.state = {
      playing: false,
      videoShowing: 'pink',
      volumeSliderShowing: false
    }
  };

  playVideos() {
    if(!this.state.playing) {
      this.pinkVideo.play();
      this.greenVideo.play();
      this.state.playing = true;
      this.playButton.setAttribute('style', 'top: -2.1vw;');
      this.playButton.setAttribute('src', 'assets/images-individual/pause button.png')
    } else {
      this.pinkVideo.pause();
      this.greenVideo.pause();
      this.state.playing = false;
      this.playButton.setAttribute('style', 'top: -2.35vw;');
      this.playButton.setAttribute('src', 'assets/images-individual/play button.png')
    }
  };

  switchVideos() {
    if(this.state.videoShowing == 'pink') {
      this.pinkVideo.setAttribute('style', 'opacity: 0;');
      this.state.videoShowing = 'green'
    } else {
      this.pinkVideo.setAttribute('style', 'opacity: 1;');
      this.state.videoShowing = 'pink'
    }
  }

  toggleVolumeSlider() {
    if(!this.state.volumeSliderShowing) {
      this.volumeSlider.setAttribute('style', 'opacity: 1; pointer-events: all;');
      this.state.volumeSliderShowing = true
    } else {
      this.volumeSlider.setAttribute('style', 'opacity: 0; pointer-events: none;');
      this.state.volumeSliderShowing = false
    }
  }

};

createPlayer = () => {
  videoPlayer = new VideoPlayer()
};

document.onload = createPlayer();

progressSlider = document.getElementById('progress-slider');
xPosition = -55

setInterval(() => {
  xPosition += 1
  progressSlider.setAttribute('style', 'background-position: ' + xPosition + 'vw; 0vw')

  
}, 1000);
