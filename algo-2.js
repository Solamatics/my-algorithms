
// const songDecoder = (song) => {
//     return song.replace(/(WUB)+/gi, '').trim();
// }


// console.log(songDecoder("AWUBBWUBC"));



const openOrSenior = (data) => {
   return data.map((item) => {
        return (item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open');
    })
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))