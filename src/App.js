import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatSpace from "./components/ChatSpace";

import { auth } from "./firebase/config";

import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user]= useAuthState(auth)
  return (
    <>
      <header>
        <SignOut/>
      </header>
      <section>
        {user? <ChatSpace/> : <SignIn/>}
      </section>
    </>
  )
}

export default App;
