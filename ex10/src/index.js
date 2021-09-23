function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Michael Jackson",
            title: "Ghosts",
            release_year: 1996,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: false
        }
    };
    return myMusic;
}
myFunction()[1];
module.exports = myFunction;