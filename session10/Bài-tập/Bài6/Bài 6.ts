

class Song {
    public readonly id: number;
    private name: string;
    private length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }

    getSong(): void {
        console.log("ID:", this.id);
        console.log("Name: ", this.name);
        console.log("Length: ", this.length);   
    }

    setName(name: string): void {
        this.name = name;
    }

    setLength(length: number): void {
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




