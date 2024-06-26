import React from "react";
import "./b3.css";
import { useDispatch, useSelector } from "react-redux";
import { changeRegime } from "../../store/reducers/regimeReducer";

export default function LightDark() {
  const isDarkMode = useSelector((state: any) => state.regimeReducer.lightOrDark); 
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(changeRegime());
  };

  return (
    <div>
      <h1>Bài 3</h1>
      <div
        className={isDarkMode? "dark-mode" : "light-mode"}
      >
        <button onClick={handleChange}>
          {isDarkMode ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
