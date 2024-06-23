// components/LanguageToggle.js
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../../store/reducers/Bai6/languageSlice";

export default function LanguageToggle() {
  const language = useSelector((state: any) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-4">
        <p>
          {language.toggleLanguage === "en"
            ? "Current Language: English"
            : "Ngôn ngữ hiện tại: Tiếng Việt"}
        </p>
        <select onChange={() => dispatch(toggleLanguage())}>
          <option value="">English</option>
          <option value="">Vietnamise</option>
        </select>
      </div>
      <div className="content">
        {language.toggleLanguage === "en" ? (
          <p>Rikkei Academy</p>
        ) : (
          <p>Học Viện Rikkei</p>
        )}
      </div>
    </>
  );
}
