function solve(input) {
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let allSongs = [];
    let numberOfSongs = Number(input.shift());
    for (let i = 1; i <= numberOfSongs; i++) {
        let currentSong = input.shift();
        let typeList = currentSong.split('_')[0];
        let name = currentSong.split('_')[1];
        let time = currentSong.split('_')[2];
        let song = new Songs(typeList, name, time);
        allSongs.push(song);
    }
    let toSelect = input.shift();
    let output = allSongs;
    if (toSelect !== "all") {
        output = allSongs.filter(function (el) {
            return el.typeList === toSelect;
        });
    }
    output.forEach(function (value) {
        console.log(value.name);
    });

}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);