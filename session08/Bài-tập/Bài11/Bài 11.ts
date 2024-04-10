type Address = {
    street: string,
    city: string,
}

type Person1 = {
    name: string,
    age: number,
}

type updatePersonInfo = Person1 & {address: Address};

let personInfo: updatePersonInfo = {
    name: "Minh",
    age: 18,
    address: {
        street: "Trần Phú",
        city: "Hà Nội"
    }
} 

console.log("Tôi: ", personInfo);

