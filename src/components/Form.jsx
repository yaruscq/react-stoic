import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const placeholder = "Write your name...";
  function handleChange(e) {
    // console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <div>
      <form>
        <input
          // 方法 1
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}

          // 方法 2
          // onChange={(e) => handleChange(e)}

          // 方法 3
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={placeholder}
          value={name}
        />
      </form>
    </div>
  );
}
