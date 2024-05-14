import React, { Component } from 'react'
import Function from './components/Function'
import Class from './components/Class'
import Bai1 from './components/b1/Bai1'
import Bai2 from './components/b2/Bai2'
import Bai3 from './components/b3/Bai3'
import Parent_Comp from './components/b4/Parent_Comp'
import Parent from './components/b5/Parent'
import Parent_Component from './components/b6/Parent_Component'
import ListPost from './components/b7/ListPost'
import ListProduct from './components/b8/ListProduct'
interface AppState {
  theme: string;
  language: string;
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}){
    super(props)
    this.state = {
      theme: "light",
      language: "english",
    }
  }
  handleThemeChange = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  };

  handleLanguageChange = () => {
    if (this.state.language === "english") {
      this.setState({ language: "vietnamese" });
    } else {
      this.setState({ language: "english" });
    }
  };

  render() {
    const { theme, language } = this.state;

    let backgroundColor = "";
    let textColor = "";
    if (theme === "light") {
      backgroundColor = "white";
      textColor = "black";
    } else if (theme === "dark") {
      backgroundColor = "black";
      textColor = "white";
    }

    return (
      <div>App
        <Function></Function>
        <Class></Class>
        <Bai1></Bai1>
        <Bai2></Bai2>
        <Bai3></Bai3>
        <Parent_Comp></Parent_Comp>
        <Parent></Parent>
        <Parent_Component/>
        <ListPost/>
        <ListProduct/>

        <div style={{ backgroundColor, color: textColor }}>
          <h2>Nền : {theme}</h2>
          <h2>Ngôn ngữ : {language}</h2>
          <button onClick={this.handleThemeChange}>Change Theme</button>
        <button onClick={this.handleLanguageChange}>Change Language</button>
        </div>
      </div>
    )
  }
}

