// ดึง videoId จาก URL พารามิเตอร์
const params = new URLSearchParams(window.location.search);
const videoId = params.get('video');

if (videoId) {
  // ฝังวิดีโอ YouTube ใน iframe
  const iframe = document.getElementById('youtube-frame');
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
} else {
  alert('No video found!');
}