import React from "react";

interface Props {
  filter: string;
  setFilter: (filter: string) => void;
}

export default function Navbar({ filter, setFilter }: Props) {
  return (
    <ul className="nav nav-tabs mb-4 pb-2">
      <li className="nav-item" role="presentation">
        <div
          className={`nav-link ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Tất cả
        </div>
      </li>
      <li className="nav-item" role="presentation">
        <div
          className={`nav-link ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Đã hoàn thành
        </div>
      </li>
      <li className="nav-item" role="presentation">
        <div
          className={`nav-link ${filter === "incomplete" ? "active" : ""}`}
          onClick={() => setFilter("incomplete")}
        >
          Chưa hoàn thành
        </div>
      </li>
    </ul>
  );
}
