import Index from "./components/Index";
import listProduct from "./Data/data";
import saveLocal from "./Data/saveData";
import "./style/bootstrap.min.css";
import "./style/style.css";

export default function App() {
  saveLocal("listProduct", listProduct);
  return (
    <div>
      <Index />
    </div>
  );
}
