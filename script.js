// Selecting the elements
const moodSelect = document.getElementById('mood');
const genreSelect = document.getElementById('genre');
const genreContainer = document.getElementById('genre-container');
const findMusicButton = document.getElementById('find-music');
const playlistArea = document.getElementById('playlist-area');

// Playlist links 
const playlists = {
    happy: {
        pop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKVkd8jHsAwmLJ9xb86eBDb7'],
        rnb: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWbpio5PmxzOcu6MKMdrnkq'],
        kpop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKX1JpSynkI52_y_JV7bxUc-'],
        bollywood: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWrfxNw5IbyEgdD-QviMXR6'],
        altindie: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKUrEaSrxFA4t_LXtWCnTMdk'],
        indierock: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKUX4qzrfF3zMo5AJhNcPsIe']
    },
    sad: {
        pop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKUCp-A8CX5WbnXW0MO4Q8eN'],
        rnb: ['"https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKX_Fo8zrKrThXtXtaNWi4ay"'],
        kpop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKXzHO5pE2M6_xKjAAVWZwMP'],
        bollywood: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKU_kVJD2R_BAIgRFRrS8aNt'],
        altindie: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKXfYlvbIYLnmQjDDmBCBlCP'],
        indierock: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKXgJt1gY6T-CL3dgJdfseYF']
    },
    chill: {
        pop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        rnb: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        kpop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        bollywood: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        altindie: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        indierock: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3']
    },
    stressed: {
        pop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        rnb: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        kpop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        bollywood: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        altindie: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        indierock: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3']
    },
    angry: {
        pop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        rnb: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        kpop: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        bollywood: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        altindie: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3'],
        indierock: ['https://www.youtube.com/embed/videoseries?list=PLtKtd1WGUIKWD7Ruy93r7f037YDu60_v3']
    }
};



// 1. Show Genre dropdown when Mood is selected
moodSelect.addEventListener('change', function() {
    if (moodSelect.value !== '') {
        genreContainer.style.display = 'block';
    } else {
        genreContainer.style.display = 'none';
    }
});

// 2. When "Find Music" is clicked:
findMusicButton.addEventListener('click', function() {
    const selectedMood = moodSelect.value;
    const selectedGenre = genreSelect.value;

    if (selectedMood && selectedGenre) {
        const selectedPlaylists = playlists[selectedMood][selectedGenre];
        
        if (selectedPlaylists && selectedPlaylists.length > 0) {
            const randomPlaylist = selectedPlaylists[Math.floor(Math.random() * selectedPlaylists.length)];
            playlistArea.innerHTML = `
                <iframe width="560" height="315" src="${randomPlaylist}" 
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>`;
        } else {
            playlistArea.innerHTML = "<p>No playlist available for that combination.</p>";
        }
    } else {
        alert('Please select both a Mood and a Genre!');
    }
});

// 3. Random playlist on page load (BONUS!)
window.addEventListener('load', function() {
    const moods = Object.keys(playlists);
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    const genres = Object.keys(playlists[randomMood]);
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    const selectedPlaylists = playlists[randomMood][randomGenre];
    const randomPlaylist = selectedPlaylists[Math.floor(Math.random() * selectedPlaylists.length)];

    playlistArea.innerHTML = `
        <iframe width="560" height="315" src="${randomPlaylist}" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>`;
});
