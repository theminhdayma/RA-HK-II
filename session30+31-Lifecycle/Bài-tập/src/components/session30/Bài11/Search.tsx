import React, { useState } from 'react';
import swal from 'sweetalert';

interface SearchProps {
  updateTodoList: (newTodoList: string[]) => void;
}

export default function Search({ updateTodoList }: SearchProps) {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState<string[]>(JSON.parse(localStorage.getItem('todoList') || '[]'));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      const value = inputValue.trim();
      if (!todoList.includes(value)) {
        const newTodoList = [...todoList, value];
        setTodoList(newTodoList);
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
        setInputValue('');
        
        updateTodoList(newTodoList);
      } else {
        setInputValue('');
        swal("Công việc đã có trong danh sách !!!");
      }
    } else {
      swal("Vui lòng nhập nội dung công việc !!!");
    }
  };

  return (
    <div className='addTodo'>
      <input
        id='search'
        placeholder='Thêm công việc'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type='submit' className='btnAdd' onClick={handleAddClick}>Thêm</button>
    </div>
  );
}
