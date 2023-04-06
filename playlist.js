// Playlist
// Add: Pushes the passed-through song to the songs array
// Play: Plays current song based on array index
// Stop: Holds place in array, but calls above stop song prototype function
// Next: Sets the next song in the songs array, calling the above play prototype function
// Song should take in two arguments, title and artist, which should both be added as properties when
// the Song constructor function is used.
// Play: Sets the song as playing using isPlaying
// Stop: Sets the song as not playing (isPlaying = false)
 

function Playlist(){
    this.songs = []
    this.current = 0
    this.isPlaying = false
}

function Song(title, artist){
    this.title = title
    this.artist = artist
}

Playlist.prototype.add = function(song){
     this.songs.push(song)
}

Playlist.prototype.play = function(){
    this.songs[this.current].isPlaying = true
    let currentSong = this.songs[this.current].title
    console.log(`${currentSong} started to play`)
}

Playlist.prototype.stop = function(){
    this.songs[this.current].isPlaying = false
    let currentSong = this.songs[this.current].title
    console.log(`${currentSong} stopped`)
}

Playlist.prototype.next = function(){
    this.stop()
    this.current++
    if(this.current >= this.songs.length){
        this.current = 0
    }
    this.play()
}

const playlist1 = new Playlist(); 
const playlist2 = new Playlist(); 
const heyJude = new Song("Hey Jude", "The Beatles"); 
const jaded = new Song("Jaded", "Aerosmith"); 
 
playlist1.add(heyJude); 
playlist1.add(jaded); 
 
playlist1.play(); // Hey Jude started to play 
playlist1.next(); // Hey Jude stopped, Jaded started 
playlist1.next(); // Jaded stopped, Hey Jude started 
playlist1.stop(); // Hey Jude stopped 
playlist1.play(); // Hey Jude started