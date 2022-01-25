import { useState } from "react";

export default function CreateRoom() {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code, " is the room user trying to access");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter four letters room code to enter existing room or create one on the
        fly
      </label>
      <input
        value={code}
        maxLength={4}
        minLength={4}
        onChange={(e) => setCode(e.target.value)}
        placeholder="FOUR DIGIT CODE"
      />
      <button type="submit" disabled={!code}>
        ENTER/CREATE
      </button>
    </form>
  );
}
