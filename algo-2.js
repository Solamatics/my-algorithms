
const songDecoder = (song) => {
    return song.replace(/(WUB)+/gi, '').trim();
}


console.log(songDecoder("AWUBBWUBC"));