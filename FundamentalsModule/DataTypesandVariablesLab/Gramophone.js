function f(band, album, song) {
    band = band.toString();
    album = album.toString();
    song = song.toString();

    let duration = band.length * album.length * song.length / 2;
    let result = Math.ceil(duration / 2.5);
    console.log(`The plate was rotated ${result} times.`);
}