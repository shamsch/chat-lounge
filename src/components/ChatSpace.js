import { useEffect, useRef, useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { firestore, auth } from "../firebase/config";
import firebase from "firebase";

import ChatMessage from "./ChatMessage";

export default function ChatSpace({ chatRoom }) {
  const dummy = useRef();
  const messagesRef = firestore.collection(chatRoom);

  //had to swap out with a custom hook since it uses a listener 
  const {documents, error} = useCollection(chatRoom,null,["createdAt", "desc"]);
  const messages = documents.map((val)=> val);
  messages.reverse();

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(()=>{
    dummy.current.scrollIntoView({behavior: "smooth"})
  },[messages])

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="type your message"
        />

        <button type="submit" disabled={!formValue}>
          SEND
        </button>
      </form>
    </>
  );
}
