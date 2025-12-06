import { useState } from "react";

export default function Form3() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  const placeholderFirstname = "Your First name...";
  const placeholderLastname = "Your Last name...";
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      {name.firstname} {name.lastname}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
          type="text"
          placeholder={placeholderFirstname}
          value={name.firstname}
        />
        <input
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
          type="text"
          placeholder={placeholderLastname}
          value={name.lastname}
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
