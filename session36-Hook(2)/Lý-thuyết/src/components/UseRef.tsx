import React, { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState<number>(0);
  const useRef01 = useRef(0);
  const forcusInput = useRef<HTMLInputElement>(null)
  console.log(useRef01);

  let index = 0;

  const handleClick = () => {
    index++;
    setCount(count + 1);
    useRef01.current = useRef01.current + 1;
  };
  console.log("Curent: ", useRef01.current);
  console.log("Gía trị của index: ", index);

  useEffect(() => {
    forcusInput.current?.focus()
  }, [])
  return (
    <div>
      <h1>UseRef</h1>
      {/*
            Nó là hook reat cung cấp
            Cách dùng: import vào dùng
            => Kết quả trả về của useRef là 1 đối tượng
             Trong đối tượng đó có 1 đối tượng mặc định là: curent

             ==> Nó có 2 cách dùng chính 
              1. Khi mỗi lần component re-render thì nó không tạo ra 1 refentype mà 
              vẫn giữ nguyên giá trọ refentype ban đầu
              2. giúp mặc định focus vào ô mình muốn
        */}
        <label htmlFor="">Nhập rmail</label>
        <input ref={forcusInput} type="email" />
        <label htmlFor="">Nhập mật khẩu</label>
        <input type="password" />
        <button>Log In</button>
        <br /><br /><br />
      <p>Gía trị của count: {count}</p>
      <button onClick={handleClick}>Click Me !!! </button>
    </div>
  );
}
