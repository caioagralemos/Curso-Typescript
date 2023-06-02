function calculatePayout(song) {
}
var song1 = {
    title: 'Unchained Melody',
    artist: 'Righteous Brothers',
    numStreams: 12341243,
    credits: {
        producer: 'Phil Spector',
        writer: 'Alex North'
    }
};
function calculatePayoutTwo(song) {
    return song.numStreams * 0.0033;
}
function printSongData(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
console.log(calculatePayoutTwo(song1));
printSongData(song1);
