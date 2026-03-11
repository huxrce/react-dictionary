import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictitonary() {
  const [keyword, setKeyword] = useState(null);

  function handleResult(response) {
    return `${response.data}`;
  }

  function search(event) {
    event.prevent.Default();
    let apiKey = "etab4ae54eba8ab35o7f9e68e3e0f304";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResult);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" className="user-input" onChange={updateKeyword} />
      </form>
    </div>
  );
}
