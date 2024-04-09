/* 
    unknowns: chưa biết - không biết
    cũng giống như any nhưng nó chặt chẽ hơn
    Khi sử dụng phải kiểm tra nó
*/

function type1(userName: unknown): void {
    if(typeof userName == "string"){
        console.log("userName: ", userName.toUpperCase());
    }else{
        console.log("Không phải là string");       
    }    
}

type1("Minh");
type1(8);

function type2(userName: any): void {
    if(true){
        console.log("userName: ", userName);
    }else{
        console.log("Không phải là string");       
    }    
}

type2("Minh");
type2(8);
