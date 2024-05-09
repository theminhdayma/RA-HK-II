import React from 'react';

interface IconProps {
  deleteWork: () => void;
  editWork: () => void;
}

export default function Icon({ deleteWork, editWork }: IconProps) {
  return (
    <div className='icon'>
      <i onClick={editWork} style={{ color: "aqua", cursor: "pointer" }} className="fa-solid fa-pen"></i>
      <i onClick={deleteWork} style={{ color: "red", cursor: "pointer" }} className="fa-solid fa-trash"></i>
    </div>
  );
}