"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class EditJob extends react_1.Component {
    constructor(props) {
        super(props);
        this.openForm = () => {
            this.setState({
                isOpen: true,
                inputValue: this.props.job.name
            });
        };
        this.closeForm = () => {
            this.setState({
                isOpen: false,
                inputValue: ''
            });
        };
        this.handleCreateJob = () => {
            const { inputValue } = this.state;
            if (inputValue.trim() !== '') {
                // Thực hiện các hành động cần thiết để tạo công việc mới
                // ...
                this.closeForm();
            }
        };
        this.state = {
            isOpen: false,
            inputValue: ''
        };
    }
    render() {
        const { isOpen, inputValue } = this.state;
        const { job } = this.props;
        return (<div className="icons">
        <i className="fa-solid fa-pen" onClick={this.openForm}></i>
        <i className="fa-solid fa-trash" onClick={() => this.handleClick(job.id)}></i>

        {isOpen && (<div className="overlay">
            <div className="form">
              <span className="close-button" onClick={this.closeForm}>&times;</span>
              <h2>Thêm công việc</h2>
              <input type="text" value={inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })}/>
              <div className="form-buttons">
                <button onClick={this.handleCreateJob}>Thêm</button>
                <button onClick={this.closeForm}>Hủy</button>
              </div>
            </div>
          </div>)}
      </div>);
    }
}
exports.default = EditJob;
