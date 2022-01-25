import { auth } from "../firebase/config";

export default function SignOut({ setRoom }) {
  const handleClick = () => {
    auth.signOut();
    setRoom(null);
  };
  
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => handleClick()}>
        Sign Out
      </button>
    )
  );
}
