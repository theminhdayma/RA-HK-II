import React, { useCallback, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [elementTodo, setElementTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setElementTodo(e.target.value);
  };
  const handleAddTodo = useCallback(() => {
    if (elementTodo !== "") {
      setTodos((prev) => [...prev, elementTodo]);
      setElementTodo("");
    }
  }, [elementTodo]);

  return (
    <div>
      <input value={elementTodo} onChange={handleChange} type="text" />
      <button onClick={handleAddTodo}>Thêm</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
