function calculatePayout(song: {title: string, artist: string,
    numStreams: number, credits: {producer: string, writer: string}}){

}

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: { // nested objects
        producer: string,
        writer: string
    }
}

var song1: Song = {
    title: 'Unchained Melody',
    artist: 'Righteous Brothers',
    numStreams: 12341243,
    credits: { // nested objects
        producer: 'Phil Spector',
        writer: 'Alex North'
    }
}

function calculatePayoutTwo(song: Song): number {
    return song.numStreams * 0.0033
}

function printSongData(song: Song): void {
    console.log(`${song.title} - ${song.artist}`)
}

console.log(calculatePayoutTwo(song1))
printSongData(song1)