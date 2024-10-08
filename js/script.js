const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');

const songs = ['___e v ____', 'Ob___i', 'S______o dekle',
'_la_', 'Rol_e_c____','T__ n__j_','_ o_ 1_', 'Sladki problemi',  'Z__rk v __stelji'];




songs.forEach((song) => {
	var audio = new Audio();
	audio.src = `audio/${song}.mp3`;
    audio.preload = 'auto';
    audio.load();
});

let songIndex = 0;
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
	title.innerText = song;
	audio.src = `audio/${song}.mp3`;
}

// Play song
function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');
	audio.play();
}

// Pause song
function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	audio.pause();
}

// Previous song
function prevSong() {
	const isPlaying = musicContainer.classList.contains('play');
	songIndex--;
	if (songIndex < 0)
		songIndex = songs.length - 1;
	loadSong(songs[songIndex]);
	progress.style.width = '0%';
	if(isPlaying) playSong();
}

// Next song
function nextSong() {
	const isPlaying = musicContainer.classList.contains('play');
	songIndex++;
	if (songIndex > songs.length - 1)
		songIndex = 0;
	loadSong(songs[songIndex]);
	progress.style.width = '0%';
	if (isPlaying) playSong();
}

// Update progress bar
function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;
	audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');
	if (isPlaying) pauseSong();
	else playSong();
});

var i = 0;
// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);