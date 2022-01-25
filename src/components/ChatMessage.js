import { auth } from "../firebase/config";

import userImage from "../assets/user.png";

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img alt={"user_photo"} src={photoURL || userImage} />
        <p>{text}</p>
      </div>
    </>
  );
}
