import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleFirstNameChange(e) {
    setName({
      ...name,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setName({
      ...name,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{" "}
        <input value={name.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:{" "}
        <input value={name.lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to:{" "}
        <b>{`${name.firstName} ${name.lastName}`}</b>
      </p>
    </>
  );
}
