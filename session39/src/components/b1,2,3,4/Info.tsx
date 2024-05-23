import { useContext } from "react";
import { ThemeContext } from "./Index";

export default function Info() {
  const context = useContext(ThemeContext);

  if (!context) {
    return <div>Error: ThemeContext is not available</div>;
  }

  const { theme, toggleMode } = context;

  return (
    <div className={theme}>
      <button onClick={toggleMode}>Toggle Mode</button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas
        eaque soluta consequuntur architecto tempore, accusamus reprehenderit
        omnis esse in! Aut necessitatibus fuga cupiditate alias laboriosam
        quisquam voluptates minus a.
      </p>
    </div>
  );
}
