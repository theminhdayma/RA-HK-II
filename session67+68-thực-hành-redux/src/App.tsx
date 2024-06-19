import Index from "./components/Index";
import "./App.css";
import "./index.css";
import data from "./db.json";

export default function App() {
  console.log(data.books);
  localStorage.setItem("ListBook", JSON.stringify(data.books));
  return (
    <>
      <Index />
    </>
  );
}
