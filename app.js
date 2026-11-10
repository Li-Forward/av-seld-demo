// 一次只播放一个实例，避免音频相互干扰。
const videos = [...document.querySelectorAll('video')];
for (const current of videos) {
  current.addEventListener('play', () => {
    for (const other of videos) {
      if (other !== current) other.pause();
    }
  });
}
