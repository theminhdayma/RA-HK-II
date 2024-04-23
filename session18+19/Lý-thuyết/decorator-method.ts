

/* 
    - Trang trí cho phuong thức
    - phương thức và hàm khác nhau như thế nào?
    - hàm là những function tự định nghĩa
    - phương thức dùng trong đối tượng hoặc lớp
    - map, filter, forEach là phương thức của array và object
      
       ==> Để dùng decorator cho function
       thì phải dùng @trước phương thức
*/

    //Tạo function decor cho function cho class Test    
    //function phải có 3 đối số
    function decorMethodSum (target: any, propetyKey: string, descriptor: PropertyDescriptor)  {
        console.log(111111111111, target); 
        console.log(2222222, propetyKey);
        console.log(333333, descriptor);      
        
        // Trong desctiptor có chứa 1 được đối tượng có chứa thuộc tính value
        // Nhờ cái calue thì mới đi decor vjo 1 method được

        descriptor.value = function (a: number, b: number):number {
            return (a+b)*2

        }
    }
class Test {
    // Viết phương thức cho class Test
    //Tạo function tính tổng
    @decorMethodSum
    sum(a: number, b: number) {
        return a+b
    }
}

let number = new Test()
console.log(number.sum(1,2));


/* 
    Có 3 cái: decorator
    + với accessor: 1,2,3
    + với param 4, 5, 6
    + với propety 7, 8
*/

