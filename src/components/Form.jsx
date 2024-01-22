import { useState } from "react";
import submitForm from "./functions";

export default function Form() {
  //empty , typing, submitting, error, success
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  //   to handle text area data on onChange
  function handleOnChange(e) {
    e.preventDefault();
    setError(null);
    setValue(e.target.value);
  }
  //   handle the submit btn onClick
  async function handleFormSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(value);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("typing");
    }
  }
  if (status === "success") return <h1>Thats right!</h1>;
  return (
    <>
      <form>
        <textarea
          value={value}
          onChange={handleOnChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button
          onClick={handleFormSubmit}
          disabled={status === "submitting" || value === ""}
        >
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  );
}
