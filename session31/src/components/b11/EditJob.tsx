import React, { Component } from 'react'

export default class EditJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          inputValue: ''
        };
      }
    
      openForm = () => {
        this.setState({
          isOpen: true,
          inputValue: this.props.job.name
        });
      };
    
      closeForm = () => {
        this.setState({
          isOpen: false,
          inputValue: ''
        });
      };
    
      handleCreateJob = () => {
        const { inputValue } = this.state;
        if (inputValue.trim() !== '') {
          // Thực hiện các hành động cần thiết để tạo công việc mới
          // ...
    
          this.closeForm();
        }
    };  
  render() {
    const { isOpen, inputValue } = this.state;
    const { job } = this.props;

    return (
        <div className="icons">
        <i className="fa-solid fa-pen" onClick={this.openForm}></i>
        <i className="fa-solid fa-trash" onClick={() => this.handleClick(job.id)}></i>

        {isOpen && (
          <div className="overlay">
            <div className="form">
              <span className="close-button" onClick={this.closeForm}>&times;</span>
              <h2>Thêm công việc</h2>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => this.setState({ inputValue: e.target.value })}
              />
              <div className="form-buttons">
                <button onClick={this.handleCreateJob}>Thêm</button>
                <button onClick={this.closeForm}>Hủy</button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
