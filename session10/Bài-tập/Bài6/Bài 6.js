"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getSong() {
        console.log("ID:", this.id);
        console.log("Name: ", this.name);
        console.log("Length: ", this.length);
    }
    setName(name) {
        this.name = name;
    }
    setLength(length) {
        this.length = length;
    }
}
let song = new Song(101, "Cúng ta không thuộc về nhau", 4);
console.log("Trước khi thay đổi");
song.getSong();
console.log("Sau khi thay đổi");
song.setName("Lạc Trôi");
song.setLength(4.5);
song.getSong();
