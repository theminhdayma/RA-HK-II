import React from "react";
import { useParams } from "react-router-dom";

export default function Student() {
  const { name } = useParams();
  return <h2>name: {name}</h2>;
}
