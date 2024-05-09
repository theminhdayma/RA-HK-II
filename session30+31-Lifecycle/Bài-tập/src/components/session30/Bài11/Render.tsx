import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import swal from 'sweetalert';

export default function Render() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    setTodoList(storedTodoList);
  }, [todoList]);

  const deleteWork = (index: number) => {
    swal({
      title: `Bạn có chắc chắn muốn xóa công việc ${todoList[index]} không ?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleEditSave = (index: number) => {
    if (editValue.trim() !== '') {
      const newTodoList = [...todoList];
      newTodoList[index] = editValue.trim();
      setTodoList(newTodoList);
      localStorage.setItem('todoList', JSON.stringify(newTodoList));
      setEditingIndex(null);
    }
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditValue(todoList[index]);
  };

  return (
    <div>
      {todoList.map((item, index) => (
        <div key={index} className='render'>
          <div className='choose'>
            <input type="checkbox" />
            {editingIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
                onBlur={() => handleEditSave(index)}
              />
            ) : (
              <label key={index} htmlFor="">{item}</label>
            )}
          </div>
          <Icon deleteWork={() => deleteWork(index)} editWork={() => handleEditClick(index)} />
        </div>
      ))}
    </div>
  );
}