import React from "react";

interface IconProps {
  canEdit: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export default function Icon({ canEdit, onEdit, onDelete }: IconProps) {
  return (
    <div className="d-flex gap-3">
      {canEdit && (
        <i className="fas fa-pen-to-square text-warning" onClick={onEdit}></i>
      )}
      <i className="far fa-trash-can text-danger" onClick={onDelete}></i>
    </div>
  );
}
