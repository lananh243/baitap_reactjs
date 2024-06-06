"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Index_1 = require("./Index");
function Info() {
    const context = (0, react_1.useContext)(Index_1.ThemeContext);
    if (!context) {
        return <div>Error: ThemeContext is not available</div>;
    }
    const { theme, toggleMode } = context;
    return (<div className={theme}>
      <button onClick={toggleMode}>Toggle Mode</button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas
        eaque soluta consequuntur architecto tempore, accusamus reprehenderit
        omnis esse in! Aut necessitatibus fuga cupiditate alias laboriosam
        quisquam voluptates minus a.
      </p>
    </div>);
}
exports.default = Info;
