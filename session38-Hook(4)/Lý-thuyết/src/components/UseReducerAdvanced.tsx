import React, { useReducer } from "react";

interface Todo {
  id: number;
  name: string;
  status: boolean;
}

export default function UseReducerAdvanced() {
  /**
       Thực hành: Làm todoList dùng useReducer
     */
  // Khai báo state trước
  const initial = {
    todos: [],
    isloading: false,
    todo: {
      id: 0,
      name: "",
      status: false,
    },
  };
  // Khởi tạo hàm reducer
  const reducer = (state: any = initial, action: any) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return { ...state, todo: { ...state.todo, name: action.payload } };
      case "ADD_TODO":
        // state.todos.push(action.payload)
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              ...action.payload,
              id: Math.floor(
                Math.random() * 999999999999 + new Date().getMilliseconds()
              ),
            },
          ],
        };
      default:
        return state;
    }
  };

  // Khai báo 1 reducer
  const [state, dispatch] = useReducer(reducer, initial);

  //Hàm lấy giá trị ô input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    dispatch(action("CHANGE_INPUT", inputValue));
  };

  // Khởi tạo hàm tạo action
  const action = (type: any, payload: any) => {
    return {
      type: type,
      payload: payload,
    };
  };

  // Hàm thêm công việc
  const addTodo = () => {
    dispatch(action("ADD_TODO", state.todo));
  };
  return (
    <div>
      UseReducer nâng cao
      <br />
      <input onChange={handleChange} placeholder="Nhập công việc" type="text" />
      <button onClick={addTodo}>Thêm công việc</button>
      <p>Danh sách công việc</p>
      <ul>
        {state.todos.map((item: Todo) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
