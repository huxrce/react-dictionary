import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictitonary() {
  const [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.prevent.Default();
    alert(`Searching for the definition of ${keyword}`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" className="user-input" onChange={updateKeyword} />
      </form>
    </div>
  );
}
