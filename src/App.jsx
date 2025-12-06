import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// Tut 1-12
import Hello, { Hello2, Hello3, Hello4, name } from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";

function App() {
  return (
    <div className="App">
      <Form3 />
    </div>
  );
}

export default App;
