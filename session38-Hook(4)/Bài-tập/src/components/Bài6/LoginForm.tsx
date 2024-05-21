import React, { useCallback, useState } from "react";

interface Info {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [info, setInfo] = useState<Info>({
    email: "",
    password: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (info.email !== "" && info.password !== "") {
      console.log(info);
    }
    setInfo({
      email: "",
      password: "",
    });
  }, [info]);
  return (
    <div>
      <div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={info.password}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
