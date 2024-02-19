const rbd = {
    id: '1',
    songName: 'Inalcanzable',
    artist: 'Rbd',
    album: 'Empezar desde cero',
    coverFile: 'cd-rbd.jpg',

};
const edSheeran = {
    id: '2',
    songName: 'Perfect',
    artist: 'Ed Sheeran',
    album: '÷',
    coverFile: 'cd-ed-sheeran.jpg',

};
const deanLewis = {
    id: '3',
    songName: 'Be Alright',
    artist: 'Dean Lewis',
    album: 'Najlepsze hity dla Ciebie, vol. 9',
    coverFile: 'cd-dean-lewis.jpg',

};
const jamesArthur = {
    id: '5',
    songName: 'Impossible',
    artist: 'James Arthur',
    album: 'No Gravity',
    coverFile: 'cd-james-arthur.jpg',

};
const justinBieber = {
    id: '5',
    songName: 'Beauty And A Beat',
    artist: 'Justin Bieber',
    album: 'Believe',
    coverFile: 'cd-justin-bieber.jpg',

};



const musicLibary = [rbd, edSheeran, deanLewis, jamesArthur, justinBieber];

let songs = [...musicLibary];

let playList = [rbd, edSheeran, deanLewis, jamesArthur, justinBieber]

const pageBody = document.getElementById('page-body');
const searchTerm = document.getElementById('search-term');
const searchButton = document.getElementById('search-button');
const playlistElement = document.getElementById('playlist');

function loadLibary() {
    pageBody.innerHTML = '';
    for (let index = 0; index < musicLibary.length; index++) {
        pageBody.innerHTML +=
            `<div class="card d-flex flex-column align-items-center"style="width: 18rem; height:30rem">
            <img src="/assets/imagens/${songs[index].coverFile}" 
            class="card-img-top" alt="Capa do Disco">
            <div class="card-body d-flex flex-column"><h5 
            class="card-title">${songs[index].songName}</h5>
            <p class="card-text">${songs[index].album}</p>
            <p class="card-text">${songs[index].artist}
            </p><button class="btn btn-outline-success" onclick="addToPlayList('${songs[index].id}')">
            <i class="bi bi-plus-circle"></i></button></div></div>`;
    }
}

function loadPlayList() {
    playlistElement.innerHTML = '';
    for (let index = 0; index < playList.length; index++) {
        playlistElement.innerHTML += `<p id=${playList[index].id} class="d-flex justify-content-between border-top border-bottom align-items-center">
        ${playList[index].songName} -
        ${playList[index].artist} <button class="btn btn-outline-danger" onclick="removeFromPlaylis('${playList[index].id}')"><i class="bi bi-trash3"></i></button>
    </p>`

    }
}

function searchClick() {
    if (searchTerm.value === '') return;
    songs = songs.filter(
        (song) =>
            song.songName.includes(searchTerm.value) ||
            song.album.includes(searchTerm.value) ||
            song.artist.includes(searchTerm.value))
};
loadLibary();

function removeFromPlaylist(songId) {
    playList = playList.filter((song) => song.id !== songId);
    document.getElementById(songId).remove();
}
function addToPlaylist(songId) {
    if (playList.find((song) => song.id === song.id)) return;
    const songToAdd = songs.find(x => x.id === `${songId}`);
    playList.push(songToAdd);
    loadPlayList();
}

function resetFilter() {
    if (searchTerm.value === '')
        {songs = [...musicLibary];
        loadLibary();
    }

}

searchButton.addEventListener('click', searchClick);
searchTerm.addEventListener('input', resetFilter);

loadLibary();
loadPlayList();
