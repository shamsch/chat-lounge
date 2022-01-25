import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatSpace from "./components/ChatSpace";
import CreateRoom from "./components/CreateRoom.js";

import { auth } from "./firebase/config";

import { useAuthState } from "react-firebase-hooks/auth";

import { useState } from "react";

function App() {
  const [user] = useAuthState(auth);
  const [roomCode, setRoomCode] = useState(null);

  return (
    <div className="App">
      <header>
        <SignOut />
      </header>
      <section>
        {user ? (roomCode ? <ChatSpace /> : <CreateRoom setRoomCode={setRoomCode}/>) : <SignIn />}
      </section>
    </div>
  );
}

export default App;
