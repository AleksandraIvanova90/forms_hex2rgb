import React, { useState } from "react";
import Converter from "./components/Сonverter";

function App() {
  const error = "Ошибка!!!";
  const validNumber = 7;

  const [form, setForm] = useState("");
  const [valid, setValid] = useState(true);

  const RegExp = /^#[0-9A-F]{6}$/i;
  const validateValue = (value) =>
    RegExp.test(value) ? setValid(value) : setValid(RegExp.test(value));

  const handleChange = ({ target: { value } }) => {
    value.length === validNumber && validateValue(value);
    value.length <= validNumber && setForm(value);
  };

  return (
    <div
      className="container"
      style={valid ? { background: `${valid}` } : { background: "#ff0000" }}
    >
      <Converter
        form={form}
        valid={valid}
        handleChange={handleChange}
        error={error}
      />
    </div>
  );
}

export default App;
