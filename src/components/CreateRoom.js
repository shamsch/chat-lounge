import { useState } from "react";

export default function CreateRoom({setRoomCode}) {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code, " is the room user trying to access");
    setRoomCode(code)
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
        placeholder="i.e FRND or FMLY"
      />
      <button type="submit" disabled={!code}>
        ENTER/CREATE
      </button>
    </form>
  );
}
