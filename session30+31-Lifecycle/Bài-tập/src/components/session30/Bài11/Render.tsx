import React, { useEffect, useState } from 'react';
import Icon from './Icon';

export default function Render() {
  const [todoList, setTodoList] = useState<string[]>([]);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    setTodoList(storedTodoList);
  }, []);

  const deleteWork = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  };

  return (
    <div>
      {todoList.map((item, index) => (
        <div key={index} className='render'>
          <div className='choose'>
            <input type="checkbox" />
            <label key={index} htmlFor="">{item}</label>
          </div>
          <Icon deleteWork={() => deleteWork(index)} />
        </div>
      ))}
    </div>
  );
}
