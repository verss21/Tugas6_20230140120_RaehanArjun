// jsch5.js

// Animasi masuk untuk gambar saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const gambar = document.getElementById('gambar1');
    gambar.style.opacity = 0;
    gambar.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      gambar.style.transition = 'all 1s ease';
      gambar.style.opacity = 1;
      gambar.style.transform = 'scale(1)';
    }, 300);
  });
  
  // Event listener klik pada gambar
  const gambar1 = document.getElementById('gambar1');
  gambar1.addEventListener('click', () => {
    gambar1.style.transition = 'transform 0.5s ease';
    gambar1.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
      gambar1.style.transform = 'scale(1)';
    }, 500);
  });
  
  // Event listener play video
  const video = document.getElementById('video');
  video.addEventListener('play', () => {
    console.log('Video Mikasa sedang diputar!');
  });
  
  // Event listener play audio
  const audio = document.getElementById('audio');
  audio.addEventListener('play', () => {
    console.log('Audio Mikasa sedang diputar!');
  });
  