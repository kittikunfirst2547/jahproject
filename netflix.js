document.querySelectorAll('.profile').forEach((profile, index) => {
  profile.addEventListener('click', () => {
    if (!profile.classList.contains('add')) {
      const videoFiles = ['movie.mp4', 'sample2.mp4', 'sample3.mp4']; // ชื่อไฟล์วิดีโอ
      const selectedVideo = videoFiles[0]; // เลือกวิดีโอจาก index ของโปรไฟล์
      
      // เปลี่ยนหน้าไปยัง video.html พร้อมพารามิเตอร์ชื่อวิดีโอ
      window.location.href = `video.html?video=${selectedVideo}`;
    } else {
      alert('Feature to add a new profile coming soon!');
    }
  });
});
