import { useState } from "react";

export default function Form2() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  const placeholder = "Write your name...";

  return (
    <div>
      {name.firstname} {name.lastname}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          placeholder={placeholder}
          value={name.firstname}
        />
        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          type="text"
          placeholder={placeholder}
          value={name.lastname}
        />
      </form>
    </div>
  );
}
