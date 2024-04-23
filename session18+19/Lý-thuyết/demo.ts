function logAccess(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;
    const originalSetter = descriptor.set;
  
    if (originalGetter) {
      descriptor.get = function () {
        return `Giá trị từ ${propertyKey} là ${originalGetter?.call(this)}`;
      };
    }
  
    if (originalSetter) {
      descriptor.set = function (value: string) {
        console.log(`Thay đổi giá trị của ${propertyKey} thành ${value}`);
        originalSetter.call(this, value);
      };
    }
  }
  
  class Person {
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    @logAccess
    get name(): string {
      return this._name;
    }

    set name(value: string) {
      this._name = value;
    }
  }
  
  const person = new Person("John");
  console.log(person.name);
  person.name = "Alice";

/* 
    Dấu gạch chân (_) thường được sử dụng trong TypeScript (và nhiều ngôn ngữ lập trình khác) 
    để chỉ ra rằng một biến hoặc thuộc tính là "private", nghĩa là nó chỉ được truy cập hoặc 
    sử dụng bên trong class đó. Điều này là một quy ước phổ biến để bảo vệ dữ liệu và giảm 
    nguy cơ xung đột giữa các thành phần của ứng dụng.

    Khi một thuộc tính hoặc biến được đánh dấu là "private", nó chỉ có thể được truy cập hoặc 
    sử dụng bên trong class đó và không thể truy cập từ bên ngoài class đó. Điều này giúp giữ 
    cho dữ liệu được ẩn và bảo vệ khỏi sự thay đổi không mong muốn.
*/