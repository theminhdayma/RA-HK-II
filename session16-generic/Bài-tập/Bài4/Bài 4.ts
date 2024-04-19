

function say<T> (type: T): void {
    if(type){
        console.log("Xin chào !!!");
    }else {
        console.log("Tạm biệt !!");
    }
}

say(false);
say(true)

