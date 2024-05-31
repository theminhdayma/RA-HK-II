import { Route, Routes } from "react-router-dom";
import HomePage9 from "./HomePage9";
import NotFound9 from "./NotFound9";

export default function CustomLink() {
  return (
    <div>
      <Routes>
        <Route path="/home-page" element={<HomePage9 />} />
        <Route path="*" element={<NotFound9 />} />
      </Routes>
    </div>
  );
}
