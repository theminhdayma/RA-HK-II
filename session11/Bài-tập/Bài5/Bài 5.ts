 

class Cha {
    private id: number
    protected name: string

    constructor(id:number, name: string){
        this.id = id
        this.name = name
    }

    updateID(newID: number): void {
        this.id = newID;
    }
}

class Con extends Cha {
    constructor(id: number, name: string){
        super(id, name)
        // this.id = id
        this.name = name
    }

    updateID(newID: number): void {
        super.updateID(newID);
    }
}

/* 
    ==> Khi dùng access modifier private thì không thể
    thay đổi được gia trị của thuộc tính này ở ngoài class cha
       Chỉ có thể thay ở trong chính lớp đó hoặc dùng hàm để gọi id đó ra rồi
       thay đổi

    ==> Khi dùng access modifier protected thì có thể thay đổi được ở mọi nơi
*/