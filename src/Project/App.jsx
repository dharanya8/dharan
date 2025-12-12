import { useState } from "react";
import LoginModal from "./LoginModal";

function Ap() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(true)}>Open Login</button>
      <LoginModal show={show} onClose={() => setShow(false)} />
    </>
  );
}

export default Ap;
