import { Button } from "@mui/material";
import React from "react";

export default function Mui() {
  return (
    <div>
      Mui
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      
    </div>
  );
}
