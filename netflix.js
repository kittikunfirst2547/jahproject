document.querySelectorAll('.profile').forEach(profile => {
  profile.addEventListener('click', () => {
    // ดึง URL วิดีโอจาก data-video
    const videoUrl = profile.getAttribute('data-video');
    if (videoUrl) {
      // ดึง videoId จาก URL
      const videoId = new URL(videoUrl).searchParams.get('v');
      if (videoId) {
        // เปลี่ยนหน้าไปยัง video.html พร้อม videoId
        window.location.href = `video.html?video=${videoId}`;
      } else {
        alert('Invalid video URL!');
      }
    }
  });
});