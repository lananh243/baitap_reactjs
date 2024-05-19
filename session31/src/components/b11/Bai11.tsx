import React, { Component } from "react";
import { CloseOutlined } from "@ant-design/icons";
type Props = {
  title: string;
  content: string;
  type?: string;
  close : () => void
  deleteJob : () => void
};
type State = {};
export default class Bai11 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="overlay">
        <div className="modal-container">
          <header className="modal-header">
            <h3 className="modal-header-title">{this.props.title}</h3>
            <CloseOutlined onClick={this.props.close}/>
          </header>
          <main className="modal-main">
            <img
              className="modal-icon"
              src="https://cdn-icons-png.freepik.com/512/7518/7518748.png"
              alt=""
            />
            <p className="modal-content">{this.props.content}</p>
          </main>
          <footer className="modal-footer">
            <button className="button button-secondary" onClick={this.props.close}>Hủy</button>
            <button className="button button-danger" onClick={this.props.deleteJob}>Xóa</button>
          </footer>
        </div>
      </div>
    );
  }
}
