// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Dynamic Video Loading
const videoContainer = document.getElementById('video-container');
const videos = [
    { id: 'mBTAuFmAYxw', title: 'Video 1' },
    { id: '5osZoTPkSDI', title: 'Video 2' },
];

videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video');
    videoElement.innerHTML = `
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${video.id}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    `;
    videoContainer.appendChild(videoElement);
});