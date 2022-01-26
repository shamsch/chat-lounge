import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatSpace from "./components/ChatSpace";
import CreateRoom from "./components/CreateRoom.js";

import { auth } from "./firebase/config";

import { useAuthState } from "react-firebase-hooks/auth";

import { useState } from "react";

//font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [user] = useAuthState(auth);
  const [roomCode, setRoomCode] = useState(null);

  return (
    <div className="App">
      <header>
        <FontAwesomeIcon icon={faComment} className={"icon"} size='3x' />
        <h1 className="title" onClick={()=>setRoomCode(null)}> Chat Lounge</h1>
        <SignOut setRoom={setRoomCode} />
      </header>
      <section>
        {user ? (
          roomCode ? (
            <ChatSpace chatRoom={roomCode} />
          ) : (
            <CreateRoom setRoomCode={setRoomCode} />
          )
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

export default App;
